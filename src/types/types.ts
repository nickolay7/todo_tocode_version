export interface Tag {
  id: number;
  title: string;
  isActive: boolean;
}

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  tags: Tag[];
}
