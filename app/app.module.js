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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var header_component_1 = require('./shell/header.component');
var menu_component_1 = require('./shell/menu.component');
var sidebar_component_1 = require('./shell/sidebar.component');
var profile_component_1 = require('./user-profile/profile.component');
var sensor_config_component_1 = require('./sensor-config/sensor-config.component');
var sensor_list_component_1 = require('./sensor-config/sensor-list.component');
var sensor_filter_component_1 = require('./sensor-config/sensor-filter.component');
var filter_sensor_pipe_1 = require('./sensor-config/filter-sensor.pipe');
var modal_component_1 = require('./modal/modal.component');
var open_modal_directive_1 = require('./modal/open-modal.directive');
var widget_component_1 = require('./widget/widget.component');
var tab_component_1 = require('./tabs/tab.component');
var tabs_component_1 = require('./tabs/tabs.component');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'configure', component: sensor_config_component_1.SensorConfigureComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpModule,
                forms_1.FormsModule],
            exports: [router_1.RouterModule],
            declarations: [app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                dashboard_component_1.DashboardComponent,
                menu_component_1.MenuComponent,
                sidebar_component_1.SidebarComponent,
                profile_component_1.UserProfileComponent,
                sensor_config_component_1.SensorConfigureComponent,
                sensor_list_component_1.SensorListComponent,
                sensor_filter_component_1.SensorFilterComponent,
                filter_sensor_pipe_1.FilterSensor,
                modal_component_1.ModalComponent,
                open_modal_directive_1.OpenWithDirective,
                widget_component_1.WidgetComponent,
                tab_component_1.TabComponent,
                tabs_component_1.TabsComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map