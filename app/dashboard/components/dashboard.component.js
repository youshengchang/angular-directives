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
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: "\n    <div class=\"w3-container w3-pale-green w3-leftbar w3-border-green\">\n      <h2>Dashboard</h2>\n      <p>Welcome to Client Tracker. Click below to manager your client or client group</p>\n      <a routerLink=\"/clients\" class=\"w3-btn w3-light-grey\">Clients</a>\n      <a routerLink=\"/groups\" class=\"w3-btn w3-light-grey\">Groups</a>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map