import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { httpFactory } from '@angular/http/src/http_module';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { ServerNotFound } from './../common/server-not-found';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: [];
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.service.create(post).subscribe((response) => {
      post.id = response.json().id;
      //  this.posts.splice(0, 0, post);
    });
  }
  updatePost(post) {
    this.service.update(post.id).subscribe((response) => {
      console.log(response.json());
    });
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(
      (response) => {
        // const index = this.posts.indexOf(post);
        //  this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post has already been deleted');
        } else {
          throw error;
        }
      }
    );
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }
}
