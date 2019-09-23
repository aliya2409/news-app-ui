import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsService} from './news.service';
import {NewsComponent} from './news/news.component';
import {NewsFormComponent} from './news-form/news-form.component';
import {CommentFormComponent} from './comment-form.component/comment-form.component';
import {CommentService} from './comment.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsComponent,
    NewsFormComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
