import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MessagesModule } from './messages/messages.module';
import { MessagesMenuPage } from './messages/pages/messages-menu/messages-menu.component';

const routes: Routes = [
    {
        path: '', 
        component: MainMenuComponent,
        children: [
            {
                path: 'left',
                outlet: 'left',
                children: [
                    {
                        path: 'messages',
                        loadChildren: () => MessagesModule,
                    },
                    
                ]
            },
            {
                path: 'right',
                outlet: 'right',
                children: [
                    {
                        path: 'messages',
                        loadChildren: () => MessagesModule,
                    }
                ]
            }
        ]
    }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
