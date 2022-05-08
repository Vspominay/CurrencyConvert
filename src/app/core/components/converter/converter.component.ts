import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, Subject, debounceTime, map } from 'rxjs';
import { NgForm } from '@angular/forms';

import { CountryFlagService } from './../../../share/services/country-flag.service';
import { ConverterValue } from '../../../share/models/converterValue.model';
import { ConvertService } from './../../services/convert.service';
import { PreparedPair } from './../../../share/models/preparedPair.model';
import { ModalService } from './../../services/modal.service';

@Component({
    selector: 'app-converter',
    templateUrl: './converter.component.html',
    styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit, OnDestroy {
    isLoad = false;
    errorMessage = '';

    @ViewChild('convertForm', { static: true }) convertForm: NgForm;

    currencyFromSub: Subscription;
    currencyToSub: Subscription;
    comparedServiceSub: Subscription;
    comparedPairSub: Subscription;
    commonSub: Subscription;

    currentDate: Date;

    currencyFrom: ConverterValue = {
        flag: this.countryFlagService.getIconByCode('🇪🇺'),
        code: "EUR",
        state: true,
    };

    currencyTo: ConverterValue = {
        flag: this.countryFlagService.getIconByCode('🇺🇦'),
        code: "UAH",
        state: false,
    }

    comparedPair: Subject<PreparedPair> = new Subject<PreparedPair>();

    constructor(
        private modalService: ModalService,
        private convertService: ConvertService,
        private countryFlagService: CountryFlagService) { }

    ngOnInit(): void {
        this.currencyToSub = this.convertService.selectedCurrencyTo
            .subscribe(currency => {
                this.getCurrentValues(currency);
            },
                error => { this.catchError(error) })

        this.currencyFromSub = this.convertService.selectedCurrencyFrom
            .subscribe(currency => {
                this.getCurrentValues(currency);
            },
                error => { this.catchError(error) })


        this.comparedPairSub = this.comparedPair.pipe(
            debounceTime(1000),
            map(pair => {
                this.isLoad = true;
                let { provocator: fromCurrency, dependent: toCurrency, amount } = pair;

                this.comparedServiceSub = this.convertService.compareCurrency(fromCurrency, toCurrency, amount)
                    .subscribe(currencyResponse => {
                        this.currentDate = currencyResponse.date;
                        if (currencyResponse.provocatorCode === this.currencyFrom.code) {
                            this.convertForm.setValue({
                                'fromValue': amount,
                                'toValue': currencyResponse.rate
                            });
                            this.currencyFrom.value = 1;
                            this.currencyTo.value = currencyResponse.unitRate;

                        }
                        else {
                            this.convertForm.setValue({
                                'fromValue': currencyResponse.rate,
                                'toValue': amount
                            });
                            this.currencyFrom.value = currencyResponse.unitRate;
                            this.currencyTo.value = 1;
                        }

                        this.isLoad = false;
                    },
                        error => { this.catchError(error) });
            })
        ).subscribe();

        this.commonSub = this.convertService.commonRate
            .subscribe(currencyResponse => {
                if (currencyResponse) {
                    this.currentDate = currencyResponse.date;
                    this.convertForm.setValue({
                        'fromValue': currencyResponse.amount,
                        'toValue': currencyResponse.rate
                    });
                    this.currencyFrom.value = 1;
                    this.currencyTo.value = currencyResponse.unitRate;
                }
            },
                error => { this.catchError(error) });
    }


    ngOnDestroy(): void {
        if (this.currencyToSub) {
            this.currencyToSub.unsubscribe();
        }
        if (this.currencyFromSub) {
            this.currencyFromSub.unsubscribe();
        }
        if (this.comparedServiceSub) {
            this.comparedServiceSub.unsubscribe();
        }
        if (this.comparedPairSub) {
            this.comparedPairSub.unsubscribe();
        }
        if (this.commonSub) {
            this.commonSub.unsubscribe();
        }
    }


    changeCurrency(currency: ConverterValue) {
        this.modalService.open(currency);
        this.convertForm.reset();
    }

    sendForm(event: any) {
        if (this.currencyFrom.code === this.currencyTo.code) {
            this.convertForm.setValue({
                'fromValue': event.target.value,
                'toValue': event.target.value,
            });
            return;
        }

        if (this.convertForm.valid && (this.convertForm.value['fromValue'] || this.convertForm.value['toValue'])) {

            const value = this.convertForm.value;

            if (event.currentTarget.name == 'fromValue') {
                this.comparedPair.next({
                    amount: +value.fromValue,
                    provocator: this.currencyFrom.code,
                    dependent: this.currencyTo.code
                });
            }
            else {
                this.comparedPair.next({
                    amount: +value.toValue,
                    provocator: this.currencyTo.code,
                    dependent: this.currencyFrom.code
                });

            }
        }
    }

    private getCurrentValues(currency: ConverterValue) {
        if (!currency) {
            return;
        }
        if (currency.state) {
            this.currencyFrom = currency;
        }
        else {
            this.currencyTo = currency;
        }
    }

    private catchError(error: string) {
        this.errorMessage = error;
        this.isLoad = false;
        setTimeout(() => {
            this.errorMessage = '';
        }, 5000);
    }
}
