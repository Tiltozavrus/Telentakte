import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OptionsPage } from "./pages/options-menu/options-menu.component";

const routes: Routes = [
    {
        path: 'menu',
        component: OptionsPage,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OptionsRoutingModule {

}