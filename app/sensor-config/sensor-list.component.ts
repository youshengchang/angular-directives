import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sensor } from '../core/sensor';

@Component({
    selector: 'sensor-list',
    templateUrl: 'app/sensor-config/sensor-list.html'
})

export class SensorListComponent {

    @Input() sensors: Sensor[];
    @Input() showAdd: boolean = true;
    @Output() addItem: EventEmitter<Sensor> = new EventEmitter<Sensor>();


    constructor(){}

    add(sensor: Sensor){
        this.addItem.emit(sensor);
    }

}