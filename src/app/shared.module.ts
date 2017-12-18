import { NgModule } from '@angular/core';

import { LatDirective } from './labs/lat.directive';
import { LngDirective } from './labs/lng.directive';

@NgModule({
    declarations: [
        LatDirective,
        LngDirective
    ],
    exports: [
        LatDirective,
        LngDirective
    ]
})
export class SharedModule{}