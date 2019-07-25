import { Book } from '../models/books.entity';

export const booksProviders = [
  {
    provide: 'BOOKS_REPOSITORY',
    useValue: Book,
  },
];
