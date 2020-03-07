import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  blogPosts: Array<BlogPost> = blogData;
  ngOnInit(): void {
  }

}
