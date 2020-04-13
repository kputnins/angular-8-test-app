import { Category } from '../models/issues';

export const findCategoryName = (categories: Array<Category>, id: string) => {
  return categories.find(category => category.id === id).name;
};

export const findCategoryDescription = (categories: Array<Category>, id: string) => {
  return categories.find(category => category.id === id).description;
};
