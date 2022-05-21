import { MessengerType } from "./MessangerType"

export class MessageItem {
    public chatImageUrl!: string
    public title!: string
    public lastMessage!: string
    public sender?: string
    public date!: string
    public msgType?: MessengerType
}