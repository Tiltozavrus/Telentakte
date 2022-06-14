import { Component, OnInit } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window';
import { AuthService } from '../core/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(

    ) {

    }

    title = 'telentakte';
}
