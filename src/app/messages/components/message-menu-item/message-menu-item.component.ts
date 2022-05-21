import { Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
import { MessageItem } from "../../models/MessageItem/MessageItem";


@Component({
    selector: "message-menu-item",
    templateUrl: './message-menu-item.component.html',
    styleUrls: [
        './message-menu-item.component.scss'
    ]
})
export class MessageMenuItemComponent {
    @Input('item')
    public item!: MessageItem
}

// https://oauth.vk.com/authorize?display=mobile&client_id=8172290&redirect_uri=https://oauth.vk.com/blank.html&response_type=token