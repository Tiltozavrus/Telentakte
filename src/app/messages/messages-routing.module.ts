import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesChatDefaultComponent } from "./pages/messages-chat-default/messages-chat-default.component";
import { MessagesMenuPage } from "./pages/messages-menu/messages-menu.component";


const routes: Routes = [
    {
        path: 'menu',
        component: MessagesMenuPage,
    },
    {
        path: 'chat',
        children: [
            {
                path: 'default',
                component: MessagesChatDefaultComponent,
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagesRoutingModule {}