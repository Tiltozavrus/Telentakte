import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SvgButton } from './components/svg-button/svg-button.component';
import { MessagesModule } from './messages/messages.module';
import { DividerModule } from './ui/divider/divider.module';
import { RoutingModule } from './core/routing';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SvgButton,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoutingModule.forRoot(
        {
            right: {
                default: "right/messages/chat/default"
            },
        },
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
