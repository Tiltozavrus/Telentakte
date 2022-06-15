import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
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
    animations: [
        trigger(
            'right',
            [
                transition(
                    ':enter',
                    [
                        style(
                            {
                                transform: 'translateX(100%)',
                                // minWidth: '100% !important'
                            }
                        ),
                        animate(
                            '200ms ease-in-out',
                            style(
                                {
                                    transform: 'translateX(0%)',
                                }
                            )
                        ),
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style(
                            {
                                transform: 'translateX(0%)',
                            }
                        ),
                        animate(
                            '200ms ease-in-out',
                            style(
                                {
                                    transform: 'translateX(100%)'
                                }
                            )
                        ),
                    ]
                )
            ],
        ),
        trigger(
            'left',
            [
                transition(
                    ':enter',
                    [
                        style(
                            {
                                transform: 'translateX(-100%)',
                            }
                        ),
                        animate(
                            '200ms ease-in-out',
                            style(
                                {
                                    transform: 'translateX(0%)'
                                }
                            )
                        ),
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style(
                            {
                                transform: 'translateX(0%)',
                            }
                        ),
                        animate(
                            '100ms ease-in-out',
                            style(
                                {
                                    transform: 'translateX(-100%)'
                                }
                            )
                        ),
                    ]
                ),
            ],
        )
    ]
})
export class MainMenuComponent implements OnInit {

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                   
                } else if(event instanceof NavigationEnd) {
                    this.calcHide()
                }
            }
        )
    }

    public hide!: "left" | "right" | "none"
    public selectedIcon: Icons = Icons.Messages
    public isAnim!: boolean

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
        const isDefault = this.router.parseUrl(this.router.url).root.children['right'].segments.reverse()[0].path === 'default'
        if (isDefault && this.width < 800) {
            this.hide = "right"
        } else if (!isDefault && this.width < 800){
            this.hide = "left"
        } else {
            this.hide = "none"
        }
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
            ],
            {
                state: {
                    action: "change"
                }
            }
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
            ],
            {
                state: {
                    action: "change"
                }
            }
        )
    }

    phoneClick() {
        this.selectedIcon = Icons.Phone
    }
}