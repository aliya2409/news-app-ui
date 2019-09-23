class Publication {
  content: string;
  creationDate: string;
  id: number;

  constructor(id: number, content: string, creationDate: string) {
    this.id = id;
    this.content = content;
    this.creationDate = creationDate;
  }
}

export class News extends Publication {
  title: string;
  brief: string;
  comments: Comment[] = [];

  constructor(id: number, content: string, creationTime: string, title: string, brief: string, comments: Comment[]) {
    super(id, content, creationTime);
    this.title = title;
    this.brief = brief;
    this.comments = comments;
  }
}

export class Comment extends Publication {
  author: string;
  news: News;

  constructor(id: number, content: string, creationTime: string, author: string, news: News) {
    super(id, content, creationTime);
    this.author = author;
    this.news = news;
  }
}
