import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Provider, Type } from "@angular/core";
import { AuthService } from "./auth.service";

@NgModule({})
export class AuthModule {
    static forRoot(): ModuleWithProviders<AuthModule> {
        return {ngModule: AuthModule, providers: [AuthService]}
    }
}
