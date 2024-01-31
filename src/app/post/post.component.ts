import { HttpClient, HttpContext } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  posts : any[] = [];
  title: any;
  body: any;
  post : any = {
    title : "" ,
    body : "",
    id: 0,
  }

  constructor (private http : HttpClient)
  {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
              .subscribe((response : any)  =>{
              this.posts = response;               
              });
  }

  createPost()
  {
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.post)
    .subscribe( (response : any) => 
    {
      this.post.id = response.id;
      this.posts.unshift(this.post);

      this.post = {
        title : "" ,
        body : "",
        id: 0,
      }
    });
  }
}
