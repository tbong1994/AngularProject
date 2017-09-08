import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Wizard } from '../wizard.component/wizard';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  // instantiate posts to an empty array
  wizards: any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.wizards = posts;
    });
    // this.wizard = new Wizard(this.posts[0],this.posts[1],this.posts[2],this.posts[3]);
  }

}