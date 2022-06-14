import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountOptions } from "./pages/account-options/account-options.component";
import { OptionsPage } from "./pages/options-menu/options-menu.component";

const routes: Routes = [
    {
        path: 'menu',
        component: OptionsPage,
    },
    {
        path: 'account',
        component: AccountOptions
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OptionsRoutingModule {

}