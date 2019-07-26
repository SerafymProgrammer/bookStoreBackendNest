import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { AuthorsBooks } from './author-book.entity';

@Table
export class Book extends Model<Book> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  img: string ;

  @HasMany(() => AuthorsBooks)
  AuthorsBooks: AuthorsBooks[];
}
