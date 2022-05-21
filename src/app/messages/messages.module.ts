import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageMenuItemComponent } from './components/message-menu-item/message-menu-item.component';
import { MessagesMenuPage } from './pages/messages-menu/messages-menu.component';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesChatDefaultComponent } from './pages/messages-chat-default/messages-chat-default.component';


@NgModule({
    imports: [
        MessagesRoutingModule,
        CommonModule,
    ],
    declarations: [
        MessageMenuItemComponent,
        MessagesMenuPage,
        MessagesChatDefaultComponent,
    ],
    exports: [
        MessageMenuItemComponent,
        MessagesMenuPage,
        MessagesChatDefaultComponent,
    ],
})
export class MessagesModule {

}