import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule, Route } from '@angular/router';
import { GroupService } from '../services/group.service';
import { Group } from '../group.model';

@Component({
  selector: 'edit-group',
  template: `
    <div class="w3-card-4">
      <div class="w3-container w3-green">
        <h2>Edit Group</h2>
      </div>
      <form [ngFormModel]="form" class="w3-padding-16">
        <div class="form-group">
          <label class="w3-label">Group Name</label>
          <input class="w3-input" type="text" [(ngModel)]="group.name" ngControl="name">
        </div>
        <div class="form-group">
          <button (click)="editGroup(group.id)" [disabled]="!form.valid" class="w3-btn w3-light-grey">Submit</button>
        </div>
      </form>
    </div>
  `
})
export class EditGroupComponent  {

  form: FormGroup;
  name: FormControl;
  public newGroup: any={};
  private id;
  private group;

  constructor(
    params: string[],
    private _groupService: GroupService,
    private builder: FormBuilder,
    private router: Router
  ){
      this.id = +params['id'];
      this.group = this._groupService.getGroup(this.id);

      this.name = new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      );

      this.form = builder.group({
          name: this.name,
      })
  }

  editGroup(id){
    this.newGroup = {
      id: id,
      name: this.group.name
    }

    this._groupService.editGroup(this.newGroup);
    this.newGroup = {};
    this.router.navigateByUrl('/groups');
  }


}