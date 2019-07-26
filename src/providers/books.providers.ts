import { Book} from '../models/books.entity';
import { Books_Repository } from '../constants/constants';

export const booksProviders = [
  {
    provide: Books_Repository,
    useValue: Book,
  },
];
