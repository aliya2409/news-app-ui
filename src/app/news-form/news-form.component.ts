import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NewsService} from '../news.service';
import {News} from '../publication';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html'
})

export class NewsFormComponent implements OnInit {
  news: News;
  id;

  constructor(private route: ActivatedRoute, private newsService: NewsService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.getNewsById();
      } else {
        this.news = new News(null, '', '', '', '', null);
      }
    });
  }

  getNewsById() {
    this.newsService.getById(this.id).subscribe((data) => this.news = data);
  }

  onSubmit() {
    console.log(this.news);
    this.newsService.save(this.news).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.router.navigate(['/news/' + this.id]).then(() => {
          window.location.reload();
        });
      },
      error => {

        console.log("Error", error);

      }
    );
  }
}
