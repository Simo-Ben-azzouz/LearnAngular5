import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlAPI ='https://jsonplaceholder.typicode.com/posts';


  constructor(private http : HttpClient) { }

  getPost()
  {
    return this.http.get(this.urlAPI);
  }

  createPost(post : any)
  {
    return this.http.post(this.urlAPI,post);
  }

  updatePost(post : any)
  {
    return this.http.put(this.urlAPI+'/'+post.id,post)
  }

  deletePost(post : any)
  {
   return this.http.delete(this.urlAPI+'/'+post.id)
  }
  
}
