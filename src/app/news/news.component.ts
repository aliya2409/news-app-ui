import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NewsService} from '../news.service';
import {News} from '../publication';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
  news: News;
  id;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router, private commentService: CommentService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      this.getNewsById();
      console.log(this.news);
    });
  }

  async getNewsById() {
    await this.newsService.getById(this.id).toPromise().then(data => this.news = data);
  }

  delete() {
    this.newsService.getDelete(this.id).subscribe();
    this.router.navigate(['/news']).then(() => {
      window.location.reload();
    });
  }

  onDeleteComment(commentId) {
    this.commentService.getDelete(this.id, commentId).subscribe(
      data => {
        console.log("GET Request is successful ", data);
        window.location.reload();
      },
      error => {

        console.log("Error", error);

      }
    );
  }
}
