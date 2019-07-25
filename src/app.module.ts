import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { UsersController } from './Controllers/users.controller';
import { UsersService } from './Services/users.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { BooksService } from './Services/books.service';
import { BooksController } from './Controllers/books.controller';
import { AuthService } from './Services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { HttpStrategy } from './common/http.strategy';
import { BookRepository } from './Repositories/books.repository';
import { UsersRepository } from './Repositories/user.repository';
import { databaseProviders } from './database.providers';
import { authorsProviders } from './providers/authors.providers';
import { AuthorsService } from './Services/authors.service';
import { booksProviders } from './providers/books.providers';
import { AuthorsController } from './Controllers/authors.controller';
import { usersProviders } from './providers/users.providers';
import { authorBookProviders } from './providers/author-book.provider';

@Module({
  imports: [
  ],
  controllers: [AppController, UsersController, BooksController, AuthController, AuthorsController],
  providers: [AppService,
    UsersService,
    BooksService,
    AuthService,
    HttpStrategy,
    BookRepository,
    ...databaseProviders,
    ...authorsProviders,
    AuthorsService,
    UsersRepository,
    ...booksProviders,
    ...usersProviders,
    ...authorBookProviders,
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
