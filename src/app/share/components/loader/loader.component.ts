import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `<div class="spinner"></div>`,
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
