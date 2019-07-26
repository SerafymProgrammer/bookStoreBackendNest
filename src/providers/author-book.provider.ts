import { AuthorsBooks } from '../models/author-book.entity';

export const AuthorsBooksProviders = [
  {
    provide: 'AUTHORS_BOOKS_REPOSITORY',
    useValue: AuthorsBooks,
  },
];
