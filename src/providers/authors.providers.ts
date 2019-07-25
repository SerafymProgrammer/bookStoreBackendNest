import { Author } from '../models/authors.entity';

export const authorsProviders = [
  {
    provide: 'AUTHORS_REPOSITORY',
    useValue: Author,
  },
];
