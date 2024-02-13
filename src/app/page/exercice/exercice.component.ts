import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FollowerService } from '../../service/follower.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exercice',
  standalone: true,
  imports: [CommonModule,NavBarComponent,RouterLink],
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {
  /**
   *
   */
  followerService = inject(FollowerService);

  followers : any[] = [];
  // title: any;
  // body: any;
  // follower : any = {
  //   login : "" ,
  //   url : "",
  //   id: 0,
  // }
  ngOnInit()
  {
    this.followerService.getAll()
    .subscribe((followers : any)  =>{
      console.log(this.followers); // Log the posts array to the console
      this.followers = followers;
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