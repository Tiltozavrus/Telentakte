import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { OptionItem } from "../../models/OptionItem/OptionItem";


@Component({
    selector: 'options-menu',
    templateUrl: './options-menu.component.html',
    styleUrls: [
        './options-menu.component.scss',
    ]
})
export class OptionsPage implements OnInit, OnDestroy {

    constructor(
        private readonly router: Router,
    ) {
        this.routeSubscription = this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    const lastArg = this.router.parseUrl(event.url).root.children['right'].segments.reverse()[0].path
                    this.someSelected(lastArg)
                }
            }
        )
    }

    public selectedItem?: OptionItem

    public optionItems: OptionItem[] = [
        {
            imgSrc: "assets/svg/account-icon.svg",
            text: "Аккаунты",
            destPage: "account"
        }
    ]

    private routeSubscription!: Subscription

    ngOnInit(): void {
        const lastArg = this.router.parseUrl(this.router.url).root.children['right'].segments.reverse()[0].path
        this.someSelected(lastArg)
    }

    
    ngOnDestroy(): void {
        this.routeSubscription.unsubscribe()
    }
    
    private someSelected(lastArg: string) {
        const filtered = this.optionItems.filter(
            (value) => {
                return value.destPage === lastArg
            }
        )
        if(filtered.length > 0) {
            this.selectedItem = filtered.pop()
        } else {
            this.selectedItem = undefined
        }
    }

    onSelect(item: OptionItem) {
        this.selectedItem = item
    }
}
