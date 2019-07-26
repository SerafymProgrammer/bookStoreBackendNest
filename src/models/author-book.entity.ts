import {Model, Table, PrimaryKey, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Book} from './books.entity';
import {Author} from './authors.entity';

@Table
export class AuthorsBooks extends Model<AuthorsBooks> {

  @ForeignKey(() => Author)
  @PrimaryKey
  @Column
  AuthorsId: number;

  @ForeignKey(() => Book)
  @PrimaryKey
  @Column
  BooksId: number;

  @BelongsTo(() => Author)
  Authors: Author;

  @BelongsTo(() => Book)
  Books: Book;
}
