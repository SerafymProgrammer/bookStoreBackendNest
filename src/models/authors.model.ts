import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { AuthorsBooks } from './author-book.model';

@Table
export class Author extends Model<Author> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => AuthorsBooks)
  AuthorsBooks: AuthorsBooks[];
}
