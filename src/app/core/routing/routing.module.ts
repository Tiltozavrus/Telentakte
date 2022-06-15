import { ModuleWithProviders, NgModule } from "@angular/core";
import { RoutingService, RoutingServiceConfig, ROUTING_SERVICE_CONFIG } from "./routing.service";


@NgModule({})
export class RoutingModule {
    static forRoot(config: RoutingServiceConfig): ModuleWithProviders<RoutingModule> {
        return {
            ngModule: RoutingModule,
            providers: [
                RoutingService,
                {
                    provide: ROUTING_SERVICE_CONFIG,
                    useValue: config
                }
            ]
        }
    }
}