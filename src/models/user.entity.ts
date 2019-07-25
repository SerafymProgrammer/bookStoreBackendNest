import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsToMany } from 'sequelize-typescript';

@Table
export class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  isAdmin: boolean;

  @Column
  img: string = '';
}
