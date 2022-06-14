import { Component } from "@angular/core";
import { OptionItem } from "../../models/OptionItem/OptionItem";


@Component({
    selector: 'options-menu',
    templateUrl: './options-menu.component.html',
    styleUrls: [
        './options-menu.component.scss',
    ]
})
export class OptionsPage {
    public selectedItem?: OptionItem

    public optionItems: OptionItem[] = [
        {
            imgSrc: "assets/svg/account-icon.svg",
            text: "Аккаунты",
            destPage: "account"
        }
    ]

    onSelect(item: OptionItem) {
        this.selectedItem = item
    }
}