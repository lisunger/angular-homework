import { Component, OnInit } from '@angular/core';

import { BlogPost } from '../blog-post';

import { Message } from 'primeng/components/common/message';
import { BlogsMockService } from '../services/blogs-mock.service';

@Component({
  selector: 'nk-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  private blogPost: BlogPost;
  msgs: Message[] = [];

  constructor(private blogService: BlogsMockService) { }

  ngOnInit() {
  }

  formSubmitted(createdPost: BlogPost) {
    console.log(createdPost);
    this.blogPost = createdPost;

    this.msgs = [];
    this.blogService.createPost(this.blogPost).subscribe(res => {
      if (res['status'] === 201) {
        this.msgs.push({severity: 'success', summary: 'Post submitted', detail: ''});
      }
    });
  }

}
