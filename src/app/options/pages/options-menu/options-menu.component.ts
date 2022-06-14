import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OptionItem } from "../../models/OptionItem/OptionItem";


@Component({
    selector: 'options-menu',
    templateUrl: './options-menu.component.html',
    styleUrls: [
        './options-menu.component.scss',
    ]
})
export class OptionsPage implements OnInit {

    constructor(
        private readonly router: Router,
    ) {
        
    }

    public selectedItem?: OptionItem

    public optionItems: OptionItem[] = [
        {
            imgSrc: "assets/svg/account-icon.svg",
            text: "Аккаунты",
            destPage: "account"
        }
    ]

    ngOnInit(): void {
        const lastArg = this.router.parseUrl(this.router.url).root.children['right'].segments.reverse()[0].path

        this.optionItems.forEach(
            (item) => {
                if(item.destPage === lastArg) {
                    this.selectedItem = item
                }
            }
        )
    }

    onSelect(item: OptionItem) {
        this.selectedItem = item
    }
}