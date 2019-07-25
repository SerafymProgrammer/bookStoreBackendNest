import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { AuthorBook } from './author-book.entity';

@Table
export class Author extends Model<Author> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => AuthorBook)
  authorBooks: AuthorBook[];
}
