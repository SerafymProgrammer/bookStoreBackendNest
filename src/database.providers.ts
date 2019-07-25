import { Sequelize } from 'sequelize-typescript';

import { Author } from './models/authors.entity';
import { Book } from './models/books.entity';
import { AuthorBook } from './models/author-book.entity';
import { Users } from './models/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: 3306,
        username: 'root',
        password: 'MySQLSerafym19',
        database: 'users',
      });
      sequelize.addModels([Author, Book, AuthorBook, Users]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
