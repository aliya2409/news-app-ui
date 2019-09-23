import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Comment} from './publication';
import {Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class CommentService {
  deleteUrl;
  saveUrl;

  constructor(private http: HttpClient) {
    this.deleteUrl = 'http://localhost:8080/comments/delete/';
    this.saveUrl = 'http://localhost:8080/comments/save';
  }

  getDelete(newsId, commentId) {
    return this.http.get(this.deleteUrl + newsId + "/" + commentId);
  }

  save(comment: Comment) {
    return this.http.post(this.saveUrl, comment);
  }
}
