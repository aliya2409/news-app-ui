import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment} from './publication';

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
    return this.http.get(this.deleteUrl + commentId);
  }

  save(comment: Comment, newsId: string) {
    return this.http.post(this.saveUrl, comment, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'newsId' : newsId
      })});
  }
}
