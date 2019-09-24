import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommentService} from '../comment.service';
import {Comment, News} from '../publication';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})

export class CommentFormComponent implements OnInit {
  @Input() commentModel: Comment = new Comment(null, '', null, '', 0);
  @Input() newsId;

  constructor(private commentService: CommentService, private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.commentModel);
    this.commentService.save(this.commentModel, this.newsId).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.router.navigate(['/news/' + this.newsId]).then(() => {
          window.location.reload();
        });
      },
      error => {

        console.log('Error', error);

      }
    );
  }
}
