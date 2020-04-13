export interface Issue {
  id?: string;
  title: string;
  description: string;
  email: string;
  categoryId: string;
  createdAt: string;
}

export interface Category {
  id?: string;
  name: string;
  description: string;
}
