export class BlogPost {
  constructor(
    public id: number,
    public date: Date,
    public title: string,
    public author: string,
    public content: string,
    public tags: string[],
    public imageURL?: string,
    public status: BlogPostStatus = BlogPostStatus.ACTIVE
  ) {}
}

export enum BlogPostStatus {
  ACTIVE = 1, INACTIVE = 2
}
