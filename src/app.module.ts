import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { BooksService } from './services/books.service';
import { BooksController } from './controllers/books.controller';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { HttpStrategy } from './common/http.strategy';
import { BooksRepository } from './repositories/books.repository';
import { UsersRepository } from './repositories/users.repository';
import { databaseProviders } from './database.providers';
import { authorsProviders } from './providers/authors.providers';
import { AuthorsService } from './services/authors.service';
import { booksProviders } from './providers/books.providers';
import { AuthorsController } from './controllers/authors.controller';
import { usersProviders } from './providers/users.providers';
import { AuthorsBooksProviders } from './providers/author-book.provider';
import { AuthorsRepository } from './repositories/authors.repository';

@Module({
  imports: [
  ],
  controllers: [AppController, UsersController, BooksController, AuthController, AuthorsController],
  providers: [
    AppService,
    UsersService,
    BooksService,
    AuthService,
    AuthorsService,

    HttpStrategy,

    BooksRepository,
    UsersRepository,
    AuthorsRepository,

    ...databaseProviders,
    ...authorsProviders,
    ...booksProviders,
    ...usersProviders,
    ...AuthorsBooksProviders,

  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.ALL },
        { path: 'books', method: RequestMethod.ALL },
        { path: 'auth', method: RequestMethod.ALL },
        { path: 'authors', method: RequestMethod.ALL });
  }
}
