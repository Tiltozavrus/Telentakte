import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SvgButton } from './components/svg-button/svg-button.component';
import { OptionsMenu } from './components/options-menu/options-menu.component';
import { MessagesModule } from './messages/messages.module';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SvgButton,
    OptionsMenu,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
