import { Location } from '@angular/common';
import { Injectable, ModuleWithProviders } from '@angular/core';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouterUtils {
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _location: Location
    ) {}

    static createRouterPage(pathName: string, customPage: any): ModuleWithProviders<RouterModule> {
        const _routes: Routes = [{ path: pathName, component: customPage }];
        return RouterModule.forChild(_routes)
    }

    goToLink(url: string) {
        return this._router.navigate([url]);
    }

    getIdInRoute() {
        const path = this._location.path();
        const segments = path.split('/');
        return segments[segments.length - 1]; 
    }
}