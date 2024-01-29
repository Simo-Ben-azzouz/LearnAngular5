import { HttpClient, HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  posts : any[] = [];
  constructor (private http : HttpClient)
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
              .subscribe((response : any)  =>{
              this.posts = response;
                
              });
  }
}
