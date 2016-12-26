import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators} from '@angular/forms';
import { GroupService } from '../services/group.service';
import { RouterModule, Router, Routes } from '@angular/router';

@Component({
  selector: 'add-group',
  template: `
      <div class="w3-card-4">
        <div class="w3-container w3-green">
          <h2>Add Group</h2>
        </div>
        <form [ngFormModel] = "form" class="w3-padding-16">
          <div class="form-group">
            <label class="w3-label">Group Name</label>
            <input class="w3-input" type="text" [(ngModel)] = "newGroup.name" ngControl = "name">
          </div>
          <div class="form-group">
            <button (click) = "addGroup()" [disabled] = "!form.valid" class="w3-btn w3-light-grey">Submit data</button>
          </div>
        </form>
      </div>
            `,
  
})
export class AddGroupComponent  {
  form: FormGroup;
  name: FormControl;
  public newGroup: any={};


  constructor(private _groupService: GroupService, private builder: FormBuilder, private router: Router){
      this.name = new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      );
      this.form = builder.group({
        name: this.name
      });
  }
  addGroup(){
    console.log("adding group");
    this._groupService.addGroup(this.newGroup);
    this.newGroup = {};
    this.router.navigateByUrl('/groups');
   
  }
}