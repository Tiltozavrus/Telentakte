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
    public hideLeft!: boolean
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
        this.calcHide()
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
        this.calcHide()
    }

    private calcHide() {
        if (this.router.parseUrl(this.router.url).root.children['right'].segments.reverse()[0].path === 'default') {
            if(this.width < 800) {
                this.hideRight = true
            } else {
                this.hideRight = false
            }
        } else {
            if(this.width < 800) {
                this.hideLeft = true
            } else {
                this.hideLeft = false
            }

        }

        console.log(
            'hideLeft:', this.hideLeft,
            'hideRight:', this.hideRight,
        )
    }

    messagesClick() {
        this.selectedIcon = Icons.Messages
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

    settingsClick() {
        this.selectedIcon = Icons.Options
        this.router.navigate(
            [
                {
                    outlets: {
                        left: ['left', 'options', 'menu'],
                        // right: ['right', 'messages', 'chat', 'default'],
                    }
                }
            ]
        )
    }
    phoneClick() {
        this.selectedIcon = Icons.Phone
    }
}