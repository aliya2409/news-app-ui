import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [{path: 'news', component: NewsListComponent}, {path: 'news/:id', component: NewsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
