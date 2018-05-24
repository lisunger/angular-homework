import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';
import { BlogPostStatus } from '../blog-post';

import { POSTS } from '../posts';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'nk-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private blogPost: BlogPost;
  msgs: Message[] = [];

  constructor() { }

  ngOnInit() {
  }

  formSubmitted(createdPost: BlogPost) {
    console.log(createdPost);
    this.blogPost = createdPost;

    const id = POSTS.reduce((prev, curr) =>
      new BlogPost(Math.max(prev.id, curr.id), undefined, undefined, undefined, undefined, [])).id;

    this.blogPost.id = id + 1;
    POSTS.push(this.blogPost);
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Post submitted', detail: ''});
  }

}
