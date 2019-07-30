import { AuthorsBooks } from '../models/author-book.model';
import { AuthorsBooks_Repository } from '../constants/constants';

export const AuthorsBooksProviders = [
  {
    provide: AuthorsBooks_Repository,
    useValue: AuthorsBooks,
  },
];
