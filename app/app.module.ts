import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ClientListComponent } from './clients/components/client-list.component';
import { ClientDetailsComponent } from './clients/components/client-details.component';
import { AddClientComponent } from './clients/components/add-client.component';
import { EditClientComponent } from './clients/components/edit-client.component';

import { GroupListComponent } from './groups/components/group-list.component';
import { AddGroupComponent } from './groups/components/add-group.component';
import { EditGroupComponent } from './groups/components/edit-group.component';

import { DashboardComponent } from './dashboard/components/dashboard.component';

const appRoutes: Routes = [
  { path: '',  component: DashboardComponent},
  { path: 'clients', component: ClientListComponent},
  { path: 'groups', component: GroupListComponent},
  { path: 'client/add', component: AddClientComponent},
  { path: 'group/add', component: AddGroupComponent},
  { path: 'client/details/:id', component: ClientDetailsComponent},
  { path: 'client/edit/:id', component: EditClientComponent},
  { path: 'group/edit/:id', component: EditGroupComponent},
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ],
  declarations: [ AppComponent,
                  ClientListComponent,
                  GroupListComponent,
                  DashboardComponent,
                  AddClientComponent,
                  EditClientComponent,
                  ClientDetailsComponent,
                  GroupListComponent,
                  AddGroupComponent,
                  EditGroupComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
