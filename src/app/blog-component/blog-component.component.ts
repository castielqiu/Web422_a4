import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css'],
  
})
export class BlogComponent implements OnInit {

  constructor() { }
  blogPosts: Array<BlogPost> = blogData;
  ngOnInit(): void {
  }

}
