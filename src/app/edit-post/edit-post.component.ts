import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { POSTS } from 'src/app/posts';


@Component({
  selector: 'nk-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor() { }
  postsList;
  deleteDialogVisibility = false;
  editDialogVisibility = false;
  selectedPost: BlogPost;
  editedCopy: BlogPost;

  ngOnInit() {
    this.postsList = POSTS.slice(0, 14);
    this.selectedPost = new BlogPost(undefined, undefined, undefined, undefined, undefined, undefined);
    this.editedCopy = new BlogPost(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  onClickDelete(selectedPost: BlogPost) {
    this.deleteDialogVisibility = true;
    this.selectedPost = selectedPost;
  }

  onClickEdit(selectedPost: BlogPost) {
    this.editDialogVisibility = true;
    this.selectedPost = selectedPost;
    this.editedCopy = { ... this.selectedPost };
  }

  deleteConfirmed() {
    const arrayIndex = POSTS.findIndex((post) => post.id === this.selectedPost.id);
    POSTS.splice(arrayIndex, 1);
    this.postsList = POSTS;
    this.deleteDialogVisibility = false;
    this.selectedPost = undefined;
  }

  deleteCanceled() {
    this.deleteDialogVisibility = false;
    this.selectedPost = undefined;
  }

  editSubmitted(blogPost: BlogPost) {
    const arrayIndex = POSTS.findIndex((post) => post.id === this.selectedPost.id);
    POSTS[arrayIndex] = blogPost;
    this.postsList = POSTS;
    this.editDialogVisibility = false;
  }

  editCanceled() {
    this.editDialogVisibility = false;
  }

}
