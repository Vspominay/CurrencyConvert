import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CurrencyComponent } from './core/components/header/currency/currency.component';
import { ConverterComponent } from './core/components/converter/converter.component';

import { ModalComponent } from './share/components/modal/modal.component';
import { FilterPipe } from './share/pipes/filter.pipe';
import { LoaderComponent } from './share/components/loader/loader.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CurrencyComponent,
        ConverterComponent,
        ModalComponent,
        FilterPipe,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
