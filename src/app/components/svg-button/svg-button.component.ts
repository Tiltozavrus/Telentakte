import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component(
    {
        selector: 'svg-button',
        templateUrl: './svg-button.component.html',
        styleUrls: [
            '././svg-button.component.scss'
        ]
    }
)
export class SvgButton {
    @Input('src') 
    src: string = '';

    @Input('defaultColor')
    defaultColor: string = '';

    @Input('activeColor')
    activeColor: string = '';

    @Input('active')
    active: boolean = false

    // @Input('routerLink')
    // routerLink: string = ''
    
    @Output() 
    click = new EventEmitter<void>()

    onClick() {
        this.click.emit()
    }
}