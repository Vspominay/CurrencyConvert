import { ConvertService } from './../../../core/services/convert.service';
import { CountryFlagService } from './../../services/country-flag.service';
import { CountryCurrency } from '../../models/countryCurrency.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    providers: [FilterPipe],
})
export class ModalComponent implements OnInit {
    display$: Observable<'open' | 'close'>;
    countries: CountryCurrency[];
    searchString = '';
    filteredCountry: CountryCurrency[] = [];

    constructor(
        private modalService: ModalService,
        private countryFlagService: CountryFlagService,
        private filterPipe: FilterPipe,
        private convertService: ConvertService
    ) { }

    ngOnInit(): void {
        this.display$ = this.modalService.watch();
        this.countries = this.countryFlagService.getCountries();
    }

    close() {
        this.searchString = "";
        this.modalService.close();
    }

    filterChats() {
        this.filteredCountry = this.filterPipe.transform(this.countries, this.searchString, ['code', 'country']);
    }

    filterFlag(event: any) {
        this.searchString = event.target.value;
        this.filterChats();
    }

    setFlag(country: CountryCurrency) {
        this.convertService.setSelectedCurrency(country);
        this.close();
    }

}
