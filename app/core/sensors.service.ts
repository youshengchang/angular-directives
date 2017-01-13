import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Sensor } from './sensor';


@Injectable()
export class SensorService {
    private dashboardSensors: Sensor[] = [];
    
    constructor(private http: Http) {
        
    }

    discoverSensors(){
        return this.http
                .get('./assets/data/newsensors.json')
                .map(res => res.json());
    }

    getDashboardSensors(): Sensor[]{
        return this.dashboardSensors;
    }

    addToDashboard(sensor: Sensor){
        this.dashboardSensors.push(sensor)
    }
}