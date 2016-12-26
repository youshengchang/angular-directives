import { Component } from '@angular/core';
import { Router, RouterModule, Route } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../client.model';

@Component({
  selector: 'client-details',
  template: `
    <div class="w3-row">
      <ul class="w3-ul w3-border">
        <li><h2>{{client.firstName}} {{client.lastName}} <a [routerLink]="['EditClient', {action:'read', id:client.id}]" class="w3-btn light-grey w3-tiny" href="#">Edit</a></h2></li>
        <li>Group: {{client.group}}</li>
        <li>Email: {{client.email}}</li>
        <li>Phone: {{client.phone}}</li>
        <li>Street: {{client.address}}</li>
        <li>City: {{client.city}}</li>
        <li>State: {{client.state}}</li>
        <li>Zip Code: {{client.zipcode}}</li>
      </ul>
    </div>
  `
})
export class ClientDetailsComponent  {

  private id;
  private client;

  constructor(
    params: string[],
    private _clientServise: ClientService,
    private router: Router
  ){
    this.id = +params['id'];
    this.client = this._clientServise.getClient(this.id);
  }
}