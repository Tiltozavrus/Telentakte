import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddAccountButton } from "./components/add-account-button/add-account-button.component";
import { OptionsButton } from "./components/options-button/options-button.component";
import { OptionsRoutingModule } from "./options-routing.module";
import { OptionsPage } from "./pages/options-menu/options-menu.component";


@NgModule({
    imports: [
        OptionsRoutingModule,
        CommonModule,
    ],
    exports: [
        OptionsPage,
    ],
    declarations: [
        OptionsPage,
        AddAccountButton,
        OptionsButton,
    ]
})
export class OptionsModule {

}