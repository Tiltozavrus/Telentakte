import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Component({
    selector: 'options-header',
    templateUrl: './options-header.component.html',
    styleUrls: [
        './options-header.component.scss'
    ]
})
export class OptionsHeader {
    @Input('title') title!: string

    @Output('onBack') onBack = new EventEmitter<void>();

    @HostListener('document:keydown.escape', ['$event']) 
    onKeydownHandler() {
        this.onBack.emit()
    }
}