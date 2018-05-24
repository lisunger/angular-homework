import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges  } from '@angular/core';
import { BlogPost, BlogPostStatus } from 'src/app/blog-post';
import { POSTS } from 'src/app/posts';

@Component({
  selector: 'nk-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit, OnChanges {

  @Input() blogPost: BlogPost = new BlogPost(undefined, new Date(), undefined, undefined, undefined, []);
  @Input() heading = '';
  @Output() createdPost: EventEmitter<BlogPost> = new EventEmitter<BlogPost>();
  @ViewChild('form') form;
  tagsInput = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.blogPost.tags) {
      this.tagsInput = this.blogPost.tags.toString().replace(',', ', ');
    }
  }

  parseTags(): void {
    this.blogPost.tags = [];
    const splitted = this.tagsInput.split(',');
    splitted.forEach((tag, ind) => {
      this.blogPost.tags[ind] = tag.trim();
    });
  }

  resetForm() {
    this.form.reset();
    this.blogPost = new BlogPost(undefined, new Date(), undefined, undefined, undefined, []);
    this.tagsInput = '';
  }

  submitPost(): void {
    this.createdPost.emit({... this.blogPost});
    this.resetForm();
  }

}
