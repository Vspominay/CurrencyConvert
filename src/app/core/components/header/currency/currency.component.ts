import { CountryFlagService } from './../../../../share/services/country-flag.service';
import { ConverterValue } from './../../../../share/models/converterValue.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-currency',
    template: `
    <div class="currency-wrapper">
            <span *ngIf="left" class="country-flag left-flag">
                <img [src]="currency.flag.flagCode" width="35" [alt]="currency.flag.altCode" />
            </span>
            <span class="currency-value">{{currency.value | currency: currency.code + " ":"code":"2.2-2"}}</span>
            <span *ngIf="!left" class="country-flag right-flag">
                <img [src]="currency.flag.flagCode" width="35" [alt]="currency.flag.altCode" />
            </span>
    </div>`
    ,
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

    @Input() currency: ConverterValue = { code: "UAH", flag: this.countryFlagService.getIconByCode('🇺🇦') };
    @Input() left!: boolean;

    constructor(private countryFlagService: CountryFlagService) { }

    ngOnInit(): void {
    }

}
