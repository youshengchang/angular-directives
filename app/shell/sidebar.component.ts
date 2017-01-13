import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/profile.component';
import { MenuComponent } from './menu.component';

@Component({
selector: 'app-sidebar',
template: `
    <user-profile class="demo-drawer-header">
    </user-profile>
    <app-menu class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
    </app-menu>
`
})
export class SidebarComponent{}
