import { Component, OnInit } from '@angular/core';
import { POSTS } from '../posts';

@Component({
  selector: 'nk-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor() { }

  private count: number = POSTS.length;

  ngOnInit() {
  }

}
