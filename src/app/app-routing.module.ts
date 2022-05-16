import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
    {
        path: '', component: MainMenuComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
