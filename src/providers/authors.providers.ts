import { Author } from '../models/authors.model';
import { Authors_Repository } from '../constants/constants';

export const authorsProviders = [
  {
    provide: Authors_Repository,
    useValue: Author,
  },
];
