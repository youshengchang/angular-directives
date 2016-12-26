import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Subscriptiion } from 'rxjs/Subscription';

@Component({
  selector: 'add-client',
  template: `
    <div class="w3-card-4">
      <div class="w3-container w3-green">
        <h2>Add Client</h2>
      </div>
      <form [ngFormModel] = "form" class="w3-padding-16">
        <div class="form-group">
          <label class="w3-label">First Name</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.firstName" ngControl="firstName">
        </div>
        <div class="form-group">
          <label class="w3-label">Last Name</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.lastName">
        </div> 
        <div class="form-group">
          <label class="w3-label">Group</label>
          <select class="w3-select" [(ngModel)]="newClient.group">
            <option value="" disabled selected>Choose your option</option>
            <option *ngFor="#group of groups" [value]="group.name">{{group.name}}</option>
          </select>
         </div>
         <div class="form-group">
          <label class="w3-label">Email</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.email" ngControl="email">
         </div>
         <div class="form-group">
          </label class="w3-label">Phone</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.phone">
         </div>
         <div class="form-group">
          <label class="w3-label">Address</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.address">
         </div>
         <div class="form-group">
          <label class="w3-label">City</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.city">
         </div>
         <div class="form-group">
          <label class="w3-label">State</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.state">
         </div>
         <div class="form-group">
          <label class="w3-label">Zipcode</label>
          <input class="w3-input" type="text" [(ngModel)]="newClient.zipcode">
         </div>
         <div class="form-group">
          <button (click)="addClient()" [disabled]="!form.valid" class="w3-btn w3-light-grey">Submit data</button>
         </div>
      </form>
    </div>
    `,
})
export class AddClientComponent  implements OnInit, OnDestroy{

    form: FormGroup;
    firstName: FormControl;
    email: FormControl;
    public newClient: any={};
    groups;
    public subscription: Subscription;

    constructor(private _clientService: ClientService, private builder: FormBuilder, private router: Router){

        this.firstName = new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(3)
          ])
        );

        this.email = new FormControl(
          "",
          Validators.compose([Validators.required])
        );

        this.form = builder.group({
          firstName: this.firstName,
          email: this.email
        });
        this.groups = [];
    }

    ngOnInit(){
      this.subscription = this._clientService.getGroups().subscribe(group=>{
        this.groups.push(group);
      });
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    addClient(){
      this._clientService.addClient(this.newClient);
      this.newClient={};
      this.router.navigateByUrl('/clients');
    }
}