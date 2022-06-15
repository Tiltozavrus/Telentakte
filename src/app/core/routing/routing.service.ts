import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";

export interface RoutingServiceConfig {
    right: {
        default: string
    }
}

export const ROUTING_SERVICE_CONFIG = new InjectionToken<RoutingServiceConfig>('config')

@Injectable()
export class RoutingService {
    constructor(
        @Inject(ROUTING_SERVICE_CONFIG) private readonly config: RoutingServiceConfig,
    ) {
        
    }

    getRightDefaultUrl(): string {
        return this.config.right.default
    }
}