import { Injectable } from '@angular/core';
import { CountryCurrency } from '../models/countryCurrency.model';
import { Flag } from '../models/flag.model';

@Injectable({
    providedIn: 'root'
})
export class CountryFlagService {


    private countries: CountryCurrency[] = [
        { code: "PLN", country: "Polish zลoty", flag: this.getIconByCode("๐ต๐ฑ") },
        { code: "UGX", country: "Ugandan shilling", flag: this.getIconByCode("๐บ๐ฌ") },
        {
            code: "GGP",
            country: "Guernsey pound", flag: this.getIconByCode("๐ฌ๐ฌ")
        },
        { code: "MWK", country: "Malawian kwacha", flag: this.getIconByCode("๐ฒ๐ผ") },
        { code: "BMD", country: "Bermudian dollar", flag: this.getIconByCode("๐ง๐ฒ") },
        {
            code: "MNT",
            country: "Mongolian tรถgrรถg", flag: this.getIconByCode("๐ฒ๐ณ")
        },
        {
            code: "FKP",
            country: "Falkland Islands pound", flag: this.getIconByCode("๐ฎ๐ธ")
        },
        {
            code: "PYG",
            country: "Paraguayan guaranรญ", flag: this.getIconByCode("๐ต๐พ")
        },
        {
            code: "AUD",
            country: "Australian dollar", flag: this.getIconByCode("๐ฆ๐บ")
        },
        {
            code: "RWF",
            country: "Rwandan franc", flag: this.getIconByCode("๐ท๐ผ")
        },
        {
            code: "SOS",
            country: "Somali shilling", flag: this.getIconByCode("๐ธ๐ด")
        },
        {
            code: "SEK",
            country: "Swedish krona", flag: this.getIconByCode("๐ธ๐ช")
        },
        {
            code: "CUC",
            country: "Cuban convertible peso", flag: this.getIconByCode("๐จ๐บ")
        },
        {
            code: "INR",
            country: "Indian rupee", flag: this.getIconByCode("๐ฎ๐ณ")
        },
        {
            code: "BYN",
            country: "Belarusian ruble", flag: this.getIconByCode("๐ง๐พ")
        },
        {
            code: "BOB",
            country: "Bolivian boliviano", flag: this.getIconByCode("๐ง๐ด")
        },
        {
            code: "GEL",
            country: "Georgian lari", flag: this.getIconByCode("๐ฌ๐ท"),
        },
        {
            code: "ZWL",
            country: "Zimbabwean dollar", flag: this.getIconByCode("๐ฟ๐ผ")
        },
        {
            code: "EUR",
            country: "Euro", flag: this.getIconByCode("๐ช๐บ")
        },

        {
            code: "RSD",
            country: "Serbian dinar", flag: this.getIconByCode("๐ท๐ธ")
        },

        {
            code: "VND",
            country: "Vietnamese ฤแปng", flag: this.getIconByCode("๐ป๐ณ")
        },
        {
            code: "VES",
            country: "Venezuelan bolรญvar", flag: this.getIconByCode("๐ป๐ช")
        },
        {
            code: "ZMW",
            country: "Zambian kwacha", flag: this.getIconByCode("๐ฟ๐ฒ")
        },

        {
            code: "BAM",
            country: "Bosnia and Herzegovina convertible mark", flag: this.getIconByCode("๐ง๐ฆ")
        },
        {
            code: "BGN",
            country: "Bulgarian lev", flag: this.getIconByCode("๐ง๐ฌ")
        },
        {
            code: "NOK",
            country: "Norwegian krone", flag: this.getIconByCode("๐ณ๐ด")
        },
        {
            code: "BRL",
            country: "Brazilian real", flag: this.getIconByCode("๐ง๐ท")
        },
        {
            code: "JPY",
            country: "Japanese yen", flag: this.getIconByCode("๐ฏ๐ต")
        },

        {
            code: "HKD",
            country: "Hong Kong dollar", flag: this.getIconByCode("๐ญ๐ฐ")
        },
        {
            code: "ISK",
            country: "Icelandic krรณna", flag: this.getIconByCode("๐ฎ๐ธ")
        },
        {
            code: "IDR",
            country: "Indonesian rupiah", flag: this.getIconByCode("๐ฎ๐ฉ")
        },
        {
            code: "KHR",
            country: "Cambodian riel", flag: this.getIconByCode("๐ฐ๐ญ")
        },
        {
            code: "MXN",
            country: "Mexican peso", flag: this.getIconByCode("๐ฒ๐ฝ")
        },
        {
            code: "PHP",
            country: "Philippine peso", flag: this.getIconByCode("๐ต๐ญ")
        },
        {
            code: "RUB",
            country: "Russian ruble", flag: this.getIconByCode("๐ท๐บ")
        },
        {
            code: "SGD",
            country: "Singapore dollar", flag: this.getIconByCode("๐ธ๐ฌ")
        },
        {
            code: "CAD",
            country: "Canadian dollar", flag: this.getIconByCode("๐จ๐ฆ")
        },
        {
            code: "PKR",
            country: "Pakistani rupee", flag: this.getIconByCode("๐ต๐ฐ")
        },
        {
            code: "CLP",
            country: "Chilean peso", flag: this.getIconByCode("๐จ๐ฑ")
        },
        {
            code: "COP",
            country: "Colombian peso", flag: this.getIconByCode("๐จ๐ด")
        },
        {
            code: "EGP",
            country: "Egyptian pound", flag: this.getIconByCode("๐ช๐ฌ")
        },
        {
            code: "DOP",
            country: "Dominican peso", flag: this.getIconByCode("๐ฉ๐ฒ")
        },
        {
            code: "AZN",
            country: "Azerbaijani manat", flag: this.getIconByCode("๐ฆ๐ฟ")
        },
        {
            code: "SVC",
            country: "Salvadoran colรณn", flag: this.getIconByCode("๐ธ๐ป")
        },
        {
            code: "GBP",
            country: "Pound sterling", flag: this.getIconByCode("๐ฌ๐ง")
        },
        {
            code: "IRR",
            country: "Iranian rial", flag: this.getIconByCode("๐ฎ๐ท")
        },
        {
            code: "JMD",
            country: "Jamaican dollar", flag: this.getIconByCode("๐ฏ๐ฒ")
        },
        {
            code: "IQD",
            country: "Iraqi dinar", flag: this.getIconByCode("๐ฎ๐ถ")
        },
        {
            code: "KZT",
            country: "Kazakhstani tenge", flag: this.getIconByCode("๐ฐ๐ฟ")
        },
        {
            code: "KES",
            country: "Kenyan shilling", flag: this.getIconByCode("๐ฐ๐ช")
        },
        {
            code: "ILS",
            country: "Israeli new shekel", flag: this.getIconByCode("๐ฎ๐ฑ")
        },
        {
            code: "MDL",
            country: "Moldovan leu", flag: this.getIconByCode("๐ฒ๐ฉ")
        },
        {
            code: "USD",
            country: "United States dollar", flag: this.getIconByCode("๐บ๐ธ")
        },
        {
            code: "BDT",
            country: "Bangladeshi taka", flag: this.getIconByCode("๐ง๐ฉ")
        },
        {
            code: "UAH",
            country: "Ukrainian hryvnia", flag: this.getIconByCode("๐บ๐ฆ")
        },
        {
            code: "YER",
            country: "Yemeni rial", flag: this.getIconByCode("๐พ๐ช")
        },
        {
            code: "TMT",
            country: "Turkmenistan manat", flag: this.getIconByCode("๐น๐ฒ")
        },
        {
            code: "UYU",
            country: "Uruguayan peso", flag: this.getIconByCode("๐บ๐พ")
        },
        {
            code: "CZK",
            country: "Czech koruna", flag: this.getIconByCode("๐จ๐ฟ")
        },
        {
            code: "SYP",
            country: "Syrian pound", flag: this.getIconByCode("๐ธ๐พ")
        },
        {
            code: "TJS",
            country: "Tajikistani somoni", flag: this.getIconByCode("๐น๐ฏ")
        },
        {
            code: "TWD",
            country: "New Taiwan dollar", flag: this.getIconByCode("๐น๐ผ")
        },
    ]


    getCountries() {
        return [...this.countries];
    }

    getCountryByCode(code: string) {
        return this.countries.filter(country => country.code == code)[0];
    }

    getIconByCode(code: string): Flag {
        return { flagCode: `../../../assets/img/flags/${code}.png`, altCode: code }
    };
    constructor() { }
}



