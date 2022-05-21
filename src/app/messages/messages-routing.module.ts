import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageMenuItemComponent } from "./components/message-menu-item/message-menu-item.component";
import { MessagesMenuPage } from "./pages/messages-menu/messages-menu.component";


const routes: Routes = [
    {
        path: 'menu',
        component: MessagesMenuPage,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagesRoutingModule {}