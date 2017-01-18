import { Component } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

@Component({
selector: 'app-menu',
template: `
            <a class="mdl-navigation__link" href="" [routerLink]="['']" ><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
            <a class="mdl-navigation__link" href="" [routerLink]="['configure']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Configure</a>
            <div class="mdl-layout-spacer"></div>
            <a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
`
})
export class MenuComponent{}
