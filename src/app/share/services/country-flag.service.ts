import { Injectable } from '@angular/core';
import { CountryCurrency } from '../models/countryCurrency.model';
import { Flag } from '../models/flag.model';

@Injectable({
    providedIn: 'root'
})
export class CountryFlagService {


    private countries: CountryCurrency[] = [
        { code: "PLN", country: "Polish złoty", flag: this.getIconByCode("🇵🇱") },
        { code: "UGX", country: "Ugandan shilling", flag: this.getIconByCode("🇺🇬") },
        {
            code: "GGP",
            country: "Guernsey pound", flag: this.getIconByCode("🇬🇬")
        },
        { code: "MWK", country: "Malawian kwacha", flag: this.getIconByCode("🇲🇼") },
        { code: "BMD", country: "Bermudian dollar", flag: this.getIconByCode("🇧🇲") },
        {
            code: "MNT",
            country: "Mongolian tögrög", flag: this.getIconByCode("🇲🇳")
        },
        {
            code: "FKP",
            country: "Falkland Islands pound", flag: this.getIconByCode("🇮🇸")
        },
        {
            code: "PYG",
            country: "Paraguayan guaraní", flag: this.getIconByCode("🇵🇾")
        },
        {
            code: "AUD",
            country: "Australian dollar", flag: this.getIconByCode("🇦🇺")
        },
        {
            code: "RWF",
            country: "Rwandan franc", flag: this.getIconByCode("🇷🇼")
        },
        {
            code: "SOS",
            country: "Somali shilling", flag: this.getIconByCode("🇸🇴")
        },
        {
            code: "SEK",
            country: "Swedish krona", flag: this.getIconByCode("🇸🇪")
        },
        {
            code: "CUC",
            country: "Cuban convertible peso", flag: this.getIconByCode("🇨🇺")
        },
        {
            code: "INR",
            country: "Indian rupee", flag: this.getIconByCode("🇮🇳")
        },
        {
            code: "BYN",
            country: "Belarusian ruble", flag: this.getIconByCode("🇧🇾")
        },
        {
            code: "BOB",
            country: "Bolivian boliviano", flag: this.getIconByCode("🇧🇴")
        },
        {
            code: "GEL",
            country: "Georgian lari", flag: this.getIconByCode("🇬🇷"),
        },
        {
            code: "ZWL",
            country: "Zimbabwean dollar", flag: this.getIconByCode("🇿🇼")
        },
        {
            code: "EUR",
            country: "Euro", flag: this.getIconByCode("🇪🇺")
        },

        {
            code: "RSD",
            country: "Serbian dinar", flag: this.getIconByCode("🇷🇸")
        },

        {
            code: "VND",
            country: "Vietnamese đồng", flag: this.getIconByCode("🇻🇳")
        },
        {
            code: "VES",
            country: "Venezuelan bolívar", flag: this.getIconByCode("🇻🇪")
        },
        {
            code: "ZMW",
            country: "Zambian kwacha", flag: this.getIconByCode("🇿🇲")
        },

        {
            code: "BAM",
            country: "Bosnia and Herzegovina convertible mark", flag: this.getIconByCode("🇧🇦")
        },
        {
            code: "BGN",
            country: "Bulgarian lev", flag: this.getIconByCode("🇧🇬")
        },
        {
            code: "NOK",
            country: "Norwegian krone", flag: this.getIconByCode("🇳🇴")
        },
        {
            code: "BRL",
            country: "Brazilian real", flag: this.getIconByCode("🇧🇷")
        },
        {
            code: "JPY",
            country: "Japanese yen", flag: this.getIconByCode("🇯🇵")
        },

        {
            code: "HKD",
            country: "Hong Kong dollar", flag: this.getIconByCode("🇭🇰")
        },
        {
            code: "ISK",
            country: "Icelandic króna", flag: this.getIconByCode("🇮🇸")
        },
        {
            code: "IDR",
            country: "Indonesian rupiah", flag: this.getIconByCode("🇮🇩")
        },
        {
            code: "KHR",
            country: "Cambodian riel", flag: this.getIconByCode("🇰🇭")
        },
        {
            code: "MXN",
            country: "Mexican peso", flag: this.getIconByCode("🇲🇽")
        },
        {
            code: "PHP",
            country: "Philippine peso", flag: this.getIconByCode("🇵🇭")
        },
        {
            code: "RUB",
            country: "Russian ruble", flag: this.getIconByCode("🇷🇺")
        },
        {
            code: "SGD",
            country: "Singapore dollar", flag: this.getIconByCode("🇸🇬")
        },
        {
            code: "CAD",
            country: "Canadian dollar", flag: this.getIconByCode("🇨🇦")
        },
        {
            code: "PKR",
            country: "Pakistani rupee", flag: this.getIconByCode("🇵🇰")
        },
        {
            code: "CLP",
            country: "Chilean peso", flag: this.getIconByCode("🇨🇱")
        },
        {
            code: "COP",
            country: "Colombian peso", flag: this.getIconByCode("🇨🇴")
        },
        {
            code: "EGP",
            country: "Egyptian pound", flag: this.getIconByCode("🇪🇬")
        },
        {
            code: "DOP",
            country: "Dominican peso", flag: this.getIconByCode("🇩🇲")
        },
        {
            code: "AZN",
            country: "Azerbaijani manat", flag: this.getIconByCode("🇦🇿")
        },
        {
            code: "SVC",
            country: "Salvadoran colón", flag: this.getIconByCode("🇸🇻")
        },
        {
            code: "GBP",
            country: "Pound sterling", flag: this.getIconByCode("🇬🇧")
        },
        {
            code: "IRR",
            country: "Iranian rial", flag: this.getIconByCode("🇮🇷")
        },
        {
            code: "JMD",
            country: "Jamaican dollar", flag: this.getIconByCode("🇯🇲")
        },
        {
            code: "IQD",
            country: "Iraqi dinar", flag: this.getIconByCode("🇮🇶")
        },
        {
            code: "KZT",
            country: "Kazakhstani tenge", flag: this.getIconByCode("🇰🇿")
        },
        {
            code: "KES",
            country: "Kenyan shilling", flag: this.getIconByCode("🇰🇪")
        },
        {
            code: "ILS",
            country: "Israeli new shekel", flag: this.getIconByCode("🇮🇱")
        },
        {
            code: "MDL",
            country: "Moldovan leu", flag: this.getIconByCode("🇲🇩")
        },
        {
            code: "USD",
            country: "United States dollar", flag: this.getIconByCode("🇺🇸")
        },
        {
            code: "BDT",
            country: "Bangladeshi taka", flag: this.getIconByCode("🇧🇩")
        },
        {
            code: "UAH",
            country: "Ukrainian hryvnia", flag: this.getIconByCode("🇺🇦")
        },
        {
            code: "YER",
            country: "Yemeni rial", flag: this.getIconByCode("🇾🇪")
        },
        {
            code: "TMT",
            country: "Turkmenistan manat", flag: this.getIconByCode("🇹🇲")
        },
        {
            code: "UYU",
            country: "Uruguayan peso", flag: this.getIconByCode("🇺🇾")
        },
        {
            code: "CZK",
            country: "Czech koruna", flag: this.getIconByCode("🇨🇿")
        },
        {
            code: "SYP",
            country: "Syrian pound", flag: this.getIconByCode("🇸🇾")
        },
        {
            code: "TJS",
            country: "Tajikistani somoni", flag: this.getIconByCode("🇹🇯")
        },
        {
            code: "TWD",
            country: "New Taiwan dollar", flag: this.getIconByCode("🇹🇼")
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



