import { Component, OnInit } from '@angular/core';
import { Sensor } from '../core/sensor';

@Component({
    selector: 'widget',
    templateUrl: 'app/widget/widget.html'
})

export class WidgetComponent implements OnInit{
    private sensor: Sensor;

    constructor(){
        this.sensor = {
            name: 'S1-00211',
            description: 'Humidity sensor',
            type: 'humidity',
            data: {
                current: 70,
                min: 50,
                max: 72,
                avg: 60
            }
        }
    }

    ngOnInit(){}
}