import { Component } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { RoutingService } from "../../../core/routing";

@Component({
    selector: 'account-options',
    templateUrl: './account-options.component.html',
    styleUrls: [
        './account-options.component.scss',
    ]
})
export class AccountOptions {
    constructor(
        private readonly router: Router,
        private readonly routingService: RoutingService
    ) {
        
    }

    public title = "Настройка аккаунтов"

    public onHeaderBack() {
        this.router.navigate(
            [
                {
                    outlets: {
                        right: this.routingService.getRightDefaultUrl().split('/')
                    }
                }
            ]
        )
    }
}