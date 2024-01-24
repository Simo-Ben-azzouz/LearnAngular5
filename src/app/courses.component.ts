import { Component } from "@angular/core";
import { CoursesSevice } from "./courses.service";

@Component({
    selector : 'courses',
    template : `
            <!-- ================= ex 1 ============== -->

        <!-- <h1>{{ title }}</h1>
        <div (click)="onClickDiv($event)">
             <button type="button" (click)="onClick($event)" class="btn btn-primary">Primary</button>
             <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()">
             <p>{{email}}</p>
        </div> -->

            <!-- ================= ex 2 ============== -->

        <div class="container">
            <ul class="list-group">
                <li class="list-group-item">title : {{course.title | uppercase}} </li>
                <li class="list-group-item">Ratting : {{course.Ratting | number : '1.2-2'}} </li>
                <li class="list-group-item">Students : {{course.Students}} </li>
                <li class="list-group-item">Price : {{course.Price | currency : 'EUR'}} </li>
                <li class="list-group-item">Release Date : {{course.ReleaseDate | date : 'fullDate'}} </li>
            </ul>
        </div>
    `
})


export class CoursesComponent
        {
            //================= ex 2==============//

            course :any = {
                title : 'formation sur angular',
                Ratting : '4.966',
                Students : 136,
                Price : 950.38,
                ReleaseDate : new Date(2017,1,4)
            }

            //================= ex 1==============//

        //     email :string = "me@gmail.com";
        //     title = 'Dev Learning :' ;
        //     list :any[]=[];
        //     /**
        //      *
        //      */
        //    onClick($event:any){
        //     $event.stopPropagation();
        //     console.log('clicked button',$event)}
        //    onClickDiv($event:any){console.log("clicked Divfirst")}

        //    onKeyUp(){
        //         console.log(this.email)}

        }