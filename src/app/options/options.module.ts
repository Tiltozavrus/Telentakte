import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutingModule } from "../core/routing";
import { AddAccountButton } from "./components/add-account-button/add-account-button.component";
import { OptionsButton } from "./components/options-button/options-button.component";
import { OptionsHeader } from "./components/options-header/options-header.component";
import { OptionsRoutingModule } from "./options-routing.module";
import { AccountOptions } from "./pages/account-options/account-options.component";
import { OptionsPage } from "./pages/options-menu/options-menu.component";


@NgModule({
    imports: [
        OptionsRoutingModule,
        CommonModule,
        RoutingModule,
    ],
    exports: [
        OptionsPage,
    ],
    declarations: [
        OptionsPage,
        AddAccountButton,
        OptionsButton,
        AccountOptions,
        OptionsHeader,
    ]
})
export class OptionsModule {

}