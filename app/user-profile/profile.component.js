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
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            template: "\n     <img src=\"assets/images/user.jpg\" class=\"demo-avatar\">\n            <div class=\"demo-avatar-dropdown\">\n              <span>hello@example.com</span>\n              <div class=\"mdl-layout-spacer\"></div>\n              <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n                <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n                <span class=\"visuallyhidden\">Accounts</span>\n              </button>\n              <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n                <li class=\"mdl-menu__item\">hello@example.com</li>\n                <li class=\"mdl-menu__item\">info@example.com</li>\n                <li class=\"mdl-menu__item\"><i class=\"material-icons\">add</i>Add another account...</li>\n              </ul>\n            </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=profile.component.js.map