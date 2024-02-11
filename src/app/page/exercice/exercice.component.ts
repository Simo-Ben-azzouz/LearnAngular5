import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FollowerService } from '../../service/follower.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-exercice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {
  /**
   *
   */
  followerService = inject(FollowerService);

  posts : any[] = [];
  title: any;
  body: any;
  post : any = {
    title : "" ,
    body : "",
    id: 0,
  }
  ngOnInit()
  {
    this.followerService.getAll()
    .subscribe((response : any)  =>{
      console.log(this.posts); // Log the posts array to the console
      this.posts = response;
    });
  }

  // getAll() {
  //   return this.followerService.getAll()
  //   .subscribe((response : any)  =>{
  //     console.log(this.posts); // Log the posts array to the console
  //     this.posts = response;
  //   });
  // }

}