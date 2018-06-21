import { Injectable } from '@angular/core';
import { BlogService } from './BlogService';
import { BlogPost } from 'src/app/blog-post';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BlogsMongoService  {

  constructor() { }

  createPost(blogPost: BlogPost): Observable<Object> {
    return new Observable();
  }

  editPost(blogPost: BlogPost) {

  }

  getPosts(): BlogPost[] {
    return [];
  }

}
