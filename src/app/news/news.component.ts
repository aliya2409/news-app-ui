import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {NewsService} from '../news.service';
import {News} from '../publication';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})

export class NewsComponent implements OnInit {
  news: News;
  id;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getNewsById();
    });
  }

  getNewsById() {
    this.newsService.getById(this.id).subscribe((data) => this.news = data);
  }

  delete() {
    this.newsService.getDelete(this.id).subscribe();
    this.router.navigate(['/news']).then(() => {
      window.location.reload();
    });
  }
}
