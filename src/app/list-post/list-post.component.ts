import { Component, OnInit } from '@angular/core';
import { POSTS } from '../posts';
import { MatSelectChange } from '@angular/material/select';
import { BlogPostStatus } from '../blog-post';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'nk-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor() { }
  postsList;
  position = 'above';

  private count: number = POSTS.length;

  ngOnInit() {
    this.postsList = POSTS.slice(0, 14);
  }

  onStatusFilter(event: MatSelectChange) {
    // value 1 - active; value 2 - inactive; value 0 - no filter
    switch (event.value) {
      case 0:
        this.postsList = POSTS;
        break;
      case 1:
        // filter only active
        this.postsList = POSTS.filter((post, ind) => post.status === BlogPostStatus.ACTIVE);
        break;
      case 2:
        // filter only inactive
        this.postsList = POSTS.filter((post, ind) => post.status === BlogPostStatus.INACTIVE);
        break;
    }
    this.postsList = this.postsList.slice(0, 14);
  }

  onDateSort(event: MatButtonToggleChange) {
    console.log(event);

    switch (event.value) {
      // case 'no': {
      //   this.postsList = POSTS;
      //   break;
      // }
      case 'asc': {
        // sort ascending
        this.postsList = POSTS.sort((p1, p2) => p1.date.valueOf() - p2.date.valueOf());
        break;
      }
      case 'desc': {
        // sort descending
        this.postsList = POSTS.sort((p1, p2) => p2.date.valueOf() - p1.date.valueOf());
        break;
      }
    }
    this.postsList = this.postsList.slice(0, 14);
  }

}
