import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
    ]
})
export class OptionsModule {

}