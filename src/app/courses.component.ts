import { Component } from "@angular/core";
import { CoursesSevice } from "./courses.service";

@Component({
    selector : 'courses',
    template : `
        <h1>{{ title }}</h1>
        <button type="button" (click)="onClick()" class="btn btn-primary">Primary</button>

    `
})


export class CoursesComponent
        {
            title = 'mes cours de dev :' ;
            list :any[]=[];
            /**
             *
             */
           onClick(){console.log('clicked')
        alert('clicked')}
          
        }