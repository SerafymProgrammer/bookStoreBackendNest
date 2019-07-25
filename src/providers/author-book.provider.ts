import { AuthorBook } from '../models/author-book.entity';

export const authorBookProviders = [
  {
    provide: 'AUTHORS_BOOKS_REPOSITORY',
    useValue: AuthorBook,
  },
];
