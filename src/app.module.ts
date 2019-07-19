import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { Users } from './users/user.entity';
import { UsersService } from './users/users.service';
import { LoggerMiddleware } from './logger.middleware';
import { Books } from './books/books.entity';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { HttpStrategy } from './http.strategy';

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
    TypeOrmModule.forFeature([Users, Books]),
    JwtModule.register({
      secretOrPrivateKey: 'sss',
    }),
  ],
  controllers: [AppController, UsersController, BooksController, AuthController],
  providers: [AppService, UsersService, BooksService, AuthService,  HttpStrategy],
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
