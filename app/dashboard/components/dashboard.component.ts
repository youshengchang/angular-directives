import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <div class="w3-container w3-pale-green w3-leftbar w3-border-green">
      <h2>Dashboard</h2>
      <p>Welcome to Client Tracker. Click below to manager your client or client group</p>
      <a routerLink="/clients" class="w3-btn w3-light-grey">Clients</a>
      <a routerLink="/groups" class="w3-btn w3-light-grey">Groups</a>
    </div>
  `,
})
export class DashboardComponent  {}  