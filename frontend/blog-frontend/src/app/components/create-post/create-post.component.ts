import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})
export class CreatePostComponent {
  title = '';
  body = '';

  constructor(private postService: PostService) {}

  submit() {
    this.postService.createPost({ title: this.title, body: this.body })
      .subscribe(() => {
        this.title = '';
        this.body = '';
        window.location.reload();
      });
  }
}
