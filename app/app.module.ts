import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shell/header.component';
import { MenuComponent } from './shell/menu.component';
import { SidebarComponent } from './shell/sidebar.component';
import { UserProfileComponent } from './user-profile/profile.component';
import { SensorConfigureComponent } from './sensor-config/sensor-config.component';
import { SensorListComponent } from './sensor-config/sensor-list.component';
import { SensorFilterComponent } from './sensor-config/sensor-filter.component';
import { FilterSensor } from './sensor-config/filter-sensor.pipe';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'configure', component: SensorConfigureComponent}
  
];

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  HttpModule,
                  FormsModule],
  exports:      [ RouterModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  DashboardComponent,
                  MenuComponent,
                  SidebarComponent,
                  UserProfileComponent,
                  SensorConfigureComponent,
                  SensorListComponent,
                  SensorFilterComponent,
                  FilterSensor,
                  ModalComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
