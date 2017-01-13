import { Pipe, PipeTransform } from '@angular/core';
import { Sensor } from '../core/sensor';

@Pipe({
    name: 'filterSensor'
})

export class FilterSensor implements PipeTransform{



   transform(value:any, category:string) {
       console.log(value);
       console.log(category);

        return value
                .filter((entry: Sensor) => {
                    if(category && category !== '') {
                        return entry.type === category
                    } else {
                        return true;
                    }
                });
    }
}