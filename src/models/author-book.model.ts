import {Model, Table, PrimaryKey, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Book} from './books.model';
import {Author} from './authors.model';

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
  Authors: Author[];

  @BelongsTo(() => Book)
  Books: Book[];
}
