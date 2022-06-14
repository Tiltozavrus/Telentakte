import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { OptionItem } from "../../models/OptionItem/OptionItem";


@Component({
    selector: 'options-button',
    templateUrl: './options-button.component.html',
    styleUrls: [
        './options-button.component.scss',
    ]
})
export class OptionsButton {
    constructor(
        private readonly router: Router,
    ) {

    }

    @Input('optionItem') optionItem!: OptionItem
    @Input('selected') selected: boolean = false

    public onClick() {
        
    }
}