import { Component, OnInit} from '@angular/core';
import { Sensor } from '../core/sensor';
import { SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { FilterSensor } from './filter-sensor.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'configure',
     templateUrl: 'app/sensor-config/sensor-config.html'
})

export class SensorConfigureComponent implements OnInit{
    private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel: Sensor;

    constructor(private sensorService: SensorService ) {
    }

    ngOnInit(){
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }
    refreshSensors() {
        this.sensorService.discoverSensors()
            .subscribe(data => {
                this.sensors = data;
            });
    }
/*
    selectSensor(sensor:Sensor, modal:any){
        this.sensorModel = {
            name: sensor.name,
            description: sensor.description,
            type: sensor.type
        };
        modal.open();
    }
*/
    addToDashboard(sensor: Sensor){
        console.log('adding sensor', sensor);
        this.sensorService.addToDashboard(sensor);
    }
}