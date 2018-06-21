import { Injectable } from '@angular/core';
import { BlogService } from './BlogService';
import { BlogPost } from 'src/app/blog-post';

import { POSTS } from '../posts';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsMockService implements BlogService {

  constructor() { }

  createPost(blogPost: BlogPost): Observable<Object> {
    const id = POSTS.reduce((prev, curr) =>
      new BlogPost(Math.max(prev.id, curr.id), undefined, undefined, undefined, undefined, [])).id;

    blogPost.id = id + 1;
    POSTS.push(blogPost);

    return of({status: 201, body: 'success' });
  }

  editPost(blogPost: BlogPost): Observable<Object> {
    const arrayIndex = POSTS.findIndex((post) => post.id === blogPost.id);
    POSTS[arrayIndex] = blogPost;
    return of({status: 200, body: 'success' });
  }

  getPosts(): Observable<BlogPost[]> {
    return of(POSTS);
  }

  deletePost(id: string): Observable<Object> {
    const arrayIndex = POSTS.findIndex((post) => post.id === Number(id));
    POSTS.splice(arrayIndex, 1);
    return of({status: 200, body: 'success' });
  }
}
