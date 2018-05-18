import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';
import { BlogPostStatus } from '../blog-post';

import { POSTS } from '../posts';

@Component({
  selector: 'nk-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private blogPost: BlogPost = new BlogPost(undefined, new Date(), undefined, undefined, undefined, []);
  private tagsInput: string;
  private status = BlogPostStatus;

  constructor() { }

  ngOnInit() {
  }

  parseTags(): void {
    this.blogPost.tags = [];
    let splitted = this.tagsInput.split(',');
    splitted.forEach((tag, ind) => {
      this.blogPost.tags[ind] = tag.trim();
    });

    console.log(this.blogPost.content);
  }

  clearForm() {
    this.blogPost = new BlogPost(undefined, new Date(), undefined, undefined, undefined, []);
  }

  submitPost(): void {
    console.log(this.blogPost);

    POSTS.push(this.blogPost);
    this.clearForm();
  }

}
