import { ServiceService } from './../services/service.service';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent  implements OnInit{
  status = true;
  posts : any[] = [];
  title: any;
  body: any;
  post : any = {
    title : "" ,
    body : "",
    id: 0,
  }

  constructor (private postService : ServiceService )
  {
   
  }
  ngOnInit()
  {
    this.getPost();
  }

  getPost()
  {
    this.postService.getPost()
    .subscribe({
    next :  (response : any)  =>{
      
    this.posts = response;               
    },
    error: (error : any) => {
      alert('error unexpected')
      console.log(error);
      
    }
  });
  }

  createPost()
  {
    this.postService.createPost(this.post)
    .subscribe({ 
      next : (response : any) => {
      this.post.id = response.id;
      this.posts.unshift(this.post);
        
      this.post = {
        title : "" ,
        body : "",
        id: 0,
      }},
    error: (error : any) => {
      alert('error unexpected')
      console.log(error);
      
    }
    });
  }

  editPost(post : any)
  {
    this.post = post
    this.status = false;
  }

  updatePost()
  {
    this.postService.updatePost(this.post)
    .subscribe({ 
      next : (response : any) => {
      this.post.id = response.id;
      this.posts.unshift(this.post);
        
      this.post = {
        title : "" ,
        body : "",
        id: 0,
      }},
    error: (error : any) => {
      alert('error unexpected')
      console.log(error);
      
    }
    });
    this.status = true;
  }

  deletePost(post:any)
  {
    this.postService.deletePost(post)
    .subscribe({ 
     next : (response : any) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
        }
    });
  }
}
