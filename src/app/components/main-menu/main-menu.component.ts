import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MessageItem } from "../../models/MessageItem/MessageItem";

// import { ResizedEvent } from 'angular-resize-event';

export enum Icons {
    Messages = "messages",
    Options = "options",
    Phone = "phone"
}

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: [
        './main-menu.component.scss'
    ],
})
export class MainMenuComponent implements OnInit {

    constructor(
        private readonly router: Router,
    ) {}

    public hideRight!: boolean
    public selectedIcon: Icons = Icons.Messages

    public item: MessageItem = {
        chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
        title: "Демин",
        lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
        date: "17.10.21",
        // sender: "Вы"
    }

    width = 0
    ngOnInit(): void {
        this.width = window.innerWidth
        this.calcHideRight()
        this.router.navigate(
            [
                {
                    outlets: {
                        left: ['left', 'messages', 'menu'],
                        right: ['right', 'messages', 'chat', 'default'],
                    }
                }
            ]
        )
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        const target = event.target as Window
        this.width = target.innerWidth
        this.calcHideRight()
    }

    private calcHideRight() {
        if(this.width < 800) {
            this.hideRight = true
        } else {
            this.hideRight = false
        }
    }

    messagesClick() {
        this.selectedIcon = Icons.Messages
        
    }

    settingsClick() {
        this.selectedIcon = Icons.Options
    }
    phoneClick() {
        this.selectedIcon = Icons.Phone
    }
}