import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../publication';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html'
})

export class NewsListComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.showNews();
  }

  showNews() {
    this.newsService.getAll().subscribe((data) => this.newsList = data);
  }
}
