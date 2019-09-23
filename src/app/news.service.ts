import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {News} from './publication';
import {Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class NewsService {
  getAllUrl;
  getByIdUrl;
  deleteUrl;

  constructor(private http: HttpClient) {
    this.getAllUrl = 'http://localhost:8080/news/allnews';
    this.getByIdUrl = 'http://localhost:8080/news/';
    this.deleteUrl = 'http://localhost:8080/news/delete/';
  }

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(this.getAllUrl);
  }

  getById(id): Observable<News> {
    return this.http.get<News>(this.getByIdUrl + id);
  }

  getDelete(id) {
    return this.http.get(this.deleteUrl + id);
  }
}
