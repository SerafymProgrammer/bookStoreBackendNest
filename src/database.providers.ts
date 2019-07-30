import { Sequelize } from 'sequelize-typescript';

import { Author} from './models/authors.model';
import { Book} from './models/books.model';
import { AuthorsBooks } from './models/author-book.model';
import { User } from './models/users.model';
import { dataBaseInfoConnect } from './constants/constants';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(dataBaseInfoConnect);
      sequelize.addModels([Book, AuthorsBooks, User, Author]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
