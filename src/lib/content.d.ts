export interface Content {
  id: string;
  body: string;
}

export interface Post extends Content {
  title: string;
  date: string;
  tags: string[];
  description: string;
  published: boolean;
}
