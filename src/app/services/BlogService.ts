import { BlogPost } from '../blog-post';
import { Observable } from 'rxjs/Observable';

export interface BlogService {
  createPost(blogPost: BlogPost): Observable<Object>;

  editPost(blogPost: BlogPost): Observable<Object>;

  getPosts(): Observable<BlogPost[]>;

  deletePost(id: string): Observable<Object>;
}
