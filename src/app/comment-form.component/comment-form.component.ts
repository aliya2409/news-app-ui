import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

import {CommentService} from '../news.service';
import {Comment, News} from '../publication';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html'
})

export class CommentFormComponent implements OnInit {
  @Input() comment: Comment;
  @Input() news: News;

  constructor(private commentService: CommentService, private router: Router) {
    if (this.comment === null) {
      this.comment = new Comment(null, '', null, '', this.news);
    }
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.comment);
    this.commentService.save(this.comment).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.router.navigate(['/news/' + this.news.id]).then(() => {
          window.location.reload();
        });
      },
      error => {

        console.log('Error', error);

      }
    );
  }
}
