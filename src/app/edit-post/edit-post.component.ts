import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/blog-post';
import { BlogsMockService } from 'src/app/services/blogs-mock.service';


@Component({
  selector: 'nk-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private blogService: BlogsMockService) { }
  postsList;
  deleteDialogVisibility = false;
  editDialogVisibility = false;
  selectedPost: BlogPost;
  editedCopy: BlogPost;

  ngOnInit() {
    this.blogService.getPosts()
      .subscribe(res => {
        this.postsList = res;
      });
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
    this.blogService.getPosts()
      .subscribe(res => {
        this.postsList = res;
      });
    this.blogService.deletePost(this.selectedPost.id + '')
      .subscribe(res => {});
    this.deleteDialogVisibility = false;
    this.selectedPost = undefined;
  }

  deleteCanceled() {
    this.deleteDialogVisibility = false;
    this.selectedPost = undefined;
  }

  editSubmitted(blogPost: BlogPost) {
    this.blogService.editPost(blogPost)
    .subscribe(res => { });

    this.blogService.getPosts()
      .subscribe(res => {
        this.postsList = res;
      });
    this.editDialogVisibility = false;
  }

  editCanceled() {
    this.editDialogVisibility = false;
  }

}
