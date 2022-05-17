import { Component, ElementRef, HostListener, OnInit } from "@angular/core";

// import { ResizedEvent } from 'angular-resize-event';

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.component.html',
    styleUrls: [
        'main-menu.component.scss'
    ],
})
export class MainMenuComponent implements OnInit {
    public hideRight!: boolean

    width = 0
    ngOnInit(): void {
        this.width = window.innerWidth

        this.calcHideRight()
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
}