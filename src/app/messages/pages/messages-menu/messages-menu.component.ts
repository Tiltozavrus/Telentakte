import { Component } from "@angular/core";
import {Router } from "@angular/router";
import { MessageItem } from "../../models/MessageItem/MessageItem";


@Component({
    selector: 'messages-menu',
    templateUrl: './messages-menu.component.html',
    styleUrls: [
        './messages-menu.component.scss'
    ]
})
export class MessagesMenuPage {
    constructor (
        private readonly router: Router
    ) {}
    public activeItemId: number = -1

    onElemClick(id: number) {
        // Navigate to chat
        // TODO
        // this.router.navigate(
        //     [
        //         {
        //             outlets: {
        //                 right: ['right', 'messages', 'chat', 'default']
        //             }
        //         }
        //     ]
        // )
        this.activeItemId = id
    }

    isActive(i: number) {
        return i == this.activeItemId
    }

    public items: MessageItem[] = [
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
            sender: 'Олег'
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
        {
            chatImageUrl: "https://sun9-76.userapi.com/s/v1/if2/r_l7DbiazSoO-I-5xbeKbeJh2lAOB8_eXAGRLKsAgF6IkimMMb2lc0_OUdH8jclo-_-d9MT7NMYUZqrzWr9w5vUm.jpg?size=1436x2160&quality=95&type=album",
            title: "Демин",
            lastMessage: "Some message ad asd as das das das das das d asd jlk jlk j lkj kl jlklkjkl kl jkl jkl",
            date: "17.10.21",
        },
    ]
}