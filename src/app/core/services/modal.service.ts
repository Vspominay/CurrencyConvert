import { ConverterValue } from '../../share/models/converterValue.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private display: Subject<'open' | 'close'> = new Subject();

    currentSelected: boolean;

    watch(): Observable<'open' | 'close'> {
        return this.display.asObservable();
    }

    open(currency: ConverterValue) {
        this.display.next('open');
        this.currentSelected = currency.state || false;
    }
    close() {
        this.display.next('close');
    }

    getState() {
        return this.currentSelected;
    }

    constructor() { }
}
