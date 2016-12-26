"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var group_service_1 = require('../services/group.service');
var router_1 = require('@angular/router');
var AddGroupComponent = (function () {
    function AddGroupComponent(_groupService, builder, router) {
        this._groupService = _groupService;
        this.builder = builder;
        this.router = router;
        this.newGroup = {};
        this.name = new forms_1.FormControl("", forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]));
        this.form = builder.group({
            name: this.name
        });
    }
    AddGroupComponent.prototype.addGroup = function () {
        console.log("adding group");
        this._groupService.addGroup(this.newGroup);
        this.newGroup = {};
        this.router.navigateByUrl('/groups');
    };
    AddGroupComponent = __decorate([
        core_1.Component({
            selector: 'add-group',
            template: "\n      <div class=\"w3-card-4\">\n        <div class=\"w3-container w3-green\">\n          <h2>Add Group</h2>\n        </div>\n        <form [ngFormModel] = \"form\" class=\"w3-padding-16\">\n          <div class=\"form-group\">\n            <label class=\"w3-label\">Group Name</label>\n            <input class=\"w3-input\" type=\"text\" [(ngModel)] = \"newGroup.name\" ngControl = \"name\">\n          </div>\n          <div class=\"form-group\">\n            <button (click) = \"addGroup()\" [disabled] = \"!form.valid\" class=\"w3-btn w3-light-grey\">Submit data</button>\n          </div>\n        </form>\n      </div>\n            ",
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService, forms_1.FormBuilder, router_1.Router])
    ], AddGroupComponent);
    return AddGroupComponent;
}());
exports.AddGroupComponent = AddGroupComponent;
//# sourceMappingURL=add-group.component.js.map