import { Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
import { MessageItem } from "../../models/MessageItem/MessageItem";


@Component({
    selector: "message-menu-item",
    templateUrl: './message-menu-item.component.html',
    styleUrls: [
        './message-menu-item.component.scss'
    ]
})
export class MessageMenuItem {
    @Input()
    public imageUrl: string = "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album"

    @Input('item')
    public item!: MessageItem
}

// https://oauth.vk.com/authorize?display=mobile&client_id=8172290&redirect_uri=https://oauth.vk.com/blank.html&response_type=token