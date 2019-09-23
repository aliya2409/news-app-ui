class Publication {
  content: string;
  creationTime: string;
  id: number;

  constructor(id: number, content: string, creationTime: string) {
    this.id = id;
    this.content = content;
    this.creationTime = creationTime;
  }
}

export class News extends Publication {
  title: string;
  brief: string;
  comments: Comment[];

  constructor(id: number, content: string, creationTime: string, title: string, brief: string, comments: Comment[]) {
    super(id, content, creationTime);
    this.title = title;
    this.brief = brief;
    this.comments = comments;
  }
}

export class Comment extends Publication {
  author: string;

  constructor(id: number, content: string, creationTime: string, author: string) {
    super(id, content, creationTime);
    this.author = author;
  }
}
