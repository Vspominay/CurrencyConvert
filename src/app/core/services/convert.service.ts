import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';

import { ApiResponse } from './../../share/models/apiResponse.model';
import { environment } from './../../../environments/environment';
import { ModalService } from 'src/app/core/services/modal.service';
import { ConverterValue } from '../../share/models/converterValue.model';
import { CountryCurrency } from '../../share/models/countryCurrency.model';
import { ServerData } from 'src/app/share/models/serverData.model';

@Injectable({
    providedIn: 'root'
})
export class ConvertService {

    constructor(
        private modalService: ModalService,
        private http: HttpClient
    ) { }


    selectedCurrencyFrom: BehaviorSubject<ConverterValue> = new BehaviorSubject<ConverterValue>(null as unknown as ConverterValue);
    selectedCurrencyTo: BehaviorSubject<ConverterValue> = new BehaviorSubject<ConverterValue>(null as unknown as ConverterValue);
    commonRate: BehaviorSubject<ServerData> = new BehaviorSubject(null as unknown as ServerData);

    setSelectedCurrency(country: CountryCurrency) {
        let currencyState = this.modalService.getState();

        const tempCurrency: ConverterValue = {
            code: country.code,
            flag: country.flag,
            state: currencyState,
        }
        if (currencyState) {
            this.selectedCurrencyFrom.next(tempCurrency);
        }
        else {
            this.selectedCurrencyTo.next(tempCurrency);
        }
    }

    compareCurrency(fromCurrency: string, toCurrency: string, amount: number) {

        return this.http.get<ApiResponse>(`${environment.API}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
            .pipe(
                catchError((error: any) => {
                    let errorMessage = "An unkown error occured!";

                    if (error.error.message) {
                        errorMessage = error.error.message;
                    }

                    return throwError(errorMessage);
                }),
                map((serverResponse: ApiResponse) => {
                    let { base_currency_code: provocatorCode, amount, updated_date: date, rates } = serverResponse;

                    return {
                        provocatorCode,
                        dependerCode: rates[toCurrency],
                        amount: +serverResponse.amount,
                        date: new Date(date),
                        rate: +rates[toCurrency].rate_for_amount,
                        unitRate: +rates[toCurrency].rate,
                    }
                }),
                tap(response => { this.setDefaultRate(response); })
            );
    }

    private setDefaultRate(currency: ServerData) {
        if (!this.commonRate.getValue()) {
            this.commonRate.next(currency);
        }
    }
}
