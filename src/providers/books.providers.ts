import { Book} from '../models/books.model';
import { Books_Repository } from '../constants/constants';

export const booksProviders = [
  {
    provide: Books_Repository,
    useValue: Book,
  },
];
