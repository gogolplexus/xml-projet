import { Component, HostBinding } from '@angular/core';
import { routerTransition } from './_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ],
})

export class AppComponent {
  title = 'RaWeb Inria';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
