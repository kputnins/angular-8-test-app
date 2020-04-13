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

export enum CategoryId {
  'Could-have' = 1,
  'Should-have' = 2,
  'Must-have' = 3,
}
