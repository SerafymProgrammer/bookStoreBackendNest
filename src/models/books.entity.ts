import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    img: string ;
}
