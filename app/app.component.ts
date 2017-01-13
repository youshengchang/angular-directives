import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shell/header.component';
import { MenuComponent } from './shell/menu.component';
import { SidebarComponent } from './shell/sidebar.component';
import { UserProfileComponent } from './user-profile/profile.component';
import { SensorConfigureComponent } from './sensor-config/sensor-config.component';
import { SensorService } from './core/sensors.service';

@Component({
  selector: 'my-app',
  providers: [ SensorService ],
  template: `
  <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        </app-header>
        <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        </app-sidebar>
       
        <main class="mdl-layout__content mdl-color--grey-100">
          <router-outlet></router-outlet>
        </main>
  </div>
   `
})
export class AppComponent  { }
