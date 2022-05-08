import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, filterString: string, property: string[]): any {
        if (value) {

            if (value.length === 0 || !filterString.length) {
                return value;
            }

            const filteredArray = [];

            for (const item of value) {
                if (item[property[0]].match(new RegExp(filterString, 'i')) || item[property[1]].match(new RegExp(filterString, 'i'))) {
                    filteredArray.push(item);
                }
            }

            return filteredArray;
        }
    }

}
