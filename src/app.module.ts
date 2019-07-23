import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './Controllers/users.controller';
import { Users } from './models/user.entity';
import { UsersService } from './Services/users.service';
import { LoggerMiddleware } from './common/logger.middleware';
import { Books } from './models/books.entity';
import { BooksService } from './Services/books.service';
import { BooksController } from './Controllers/books.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './Services/auth.service';
import { AuthController } from './Controllers/auth.controller';
import { HttpStrategy } from './common/http.strategy';
import { BookRepository } from './Repositories/books.repository';
import { UsersRepository } from './Repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:  process.env.DB_HOST || 'localhost',
      port: 3306,
      username: 'root',
      password: 'MySQLSerafym19',
      database: 'users',
      // 'entities': ["src/**/**.entity{.ts,.js}"],
      entities: [Users, Books],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Users, Books, UsersRepository]),
    JwtModule.register({
      secretOrPrivateKey: 'sss',
    }),
  ],
  controllers: [AppController, UsersController, BooksController, AuthController],
  providers: [AppService, UsersService, BooksService, AuthService,  HttpStrategy, BookRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.ALL },
      { path: 'books', method: RequestMethod.ALL },
      { path: 'auth', method: RequestMethod.ALL });
  }
}
