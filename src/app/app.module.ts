import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MessageMenuItem } from './components/message-menu-item/message-menu-item.component';
import {MatCardModule} from '@angular/material/card';
import { SvgButton } from './components/svg-button/svg-button.component';
import { MessagesMenuComponent } from './components/messages-menu/messages-menu.component';
import { OptionsMenu } from './components/options-menu/options-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MessageMenuItem,
    SvgButton,
    MessagesMenuComponent,
    OptionsMenu,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
