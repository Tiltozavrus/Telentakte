import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MessageItem } from "../../models/MessageItem/MessageItem";


@Component({
    selector: "message-menu-item",
    templateUrl: './message-menu-item.component.html',
    styleUrls: [
        './message-menu-item.component.scss'
    ]
})
export class MessageMenuItemComponent {
    constructor(
        private readonly route: ActivatedRoute
    ) {}
    @Input('item')
    public item!: MessageItem

    @Input('itemId')
    public itemId!: number

    @Output() onElemclick = new EventEmitter<number>()
    
    @Input('active')
    public active: boolean = false

    onClick() {
        this.onElemclick.emit(this.itemId)
    }
}