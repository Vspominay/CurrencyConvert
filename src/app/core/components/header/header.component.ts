import { CountryFlagService } from './../../../share/services/country-flag.service';
import { Subscription } from 'rxjs';
import { ConvertService } from './../../services/convert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConverterValue } from './../../../share/models/converterValue.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    private compareSubUSD: Subscription;
    private compareSubEU: Subscription;

    currencyUkrUSD: ConverterValue = {
        code: "UAH",
        flag: this.countryFlagService.getIconByCode('🇺🇦'),
    }

    currencyUkrEUR: ConverterValue = {
        code: "UAH",
        flag: this.countryFlagService.getIconByCode('🇺🇦'),
    }

    currencyUSA: ConverterValue = {
        code: "USD",
        flag: this.countryFlagService.getIconByCode('🇺🇸'),
        value: 1,
    }

    currencyEU: ConverterValue = {
        code: "EUR",
        flag: this.countryFlagService.getIconByCode('🇪🇺'),
        value: 1,
    }


    constructor(private convertService: ConvertService, private countryFlagService: CountryFlagService) { }

    ngOnInit(): void {
        this.compareSubEU = this.convertService.compareCurrency(this.currencyEU.code, this.currencyUkrEUR.code, this.currencyEU.value || 1)
            .subscribe(currencyResponse => {
                this.currencyUkrEUR.value = currencyResponse.unitRate;
            });
        this.compareSubUSD = this.convertService.compareCurrency(this.currencyUSA.code, this.currencyUkrUSD.code, this.currencyUSA.value || 1)
            .subscribe(currencyResponse => {
                this.currencyUkrUSD.value = currencyResponse.unitRate;
            });
    }

    ngOnDestroy(): void {
        if (this.compareSubEU) {
            this.compareSubEU.unsubscribe();
        }

        if (this.compareSubUSD) {
            this.compareSubUSD.unsubscribe();
        }
    }
}
