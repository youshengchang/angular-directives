import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'sensor-filter',
    templateUrl: 'app/sensor-config/sensor-filter.html'
})

export class SensorFilterComponent{
    public selectedCategory: string;
    private categories: string[];
    //change event
    @Output() 
    filterChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(){
        //fill with some static predefined categories
        this.categories = [
             'temperature',
            'humidity',
            'switch'
        ]
        console.log(this.categories);
    }

    categoryChanged(value:string){
        console.log(value);
        this.selectedCategory = value;
        console.log(this.selectedCategory);
        this.filterChange.emit(this.selectedCategory);
    }

}