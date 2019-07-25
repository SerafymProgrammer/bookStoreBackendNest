import {Model, Table, PrimaryKey, Column, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Book} from './books.entity';
import {Author} from './authors.entity';

@Table
export class AuthorBook extends Model<AuthorBook> {

  @ForeignKey(() => Author)
  @PrimaryKey
  @Column
  authorId: number;

  @ForeignKey(() => Book)
  @PrimaryKey
  @Column
  bookId: number;

  @BelongsTo(() => Author)
  author: Author;

  @BelongsTo(() => Book)
  book: Book;
}
