// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository, EntityRepository } from 'typeorm';
// import { Users } from '../models/user.entity';
// @EntityRepository(Users)
// export class UsersRepository extends Repository<Users> {

//     private saltRounds = 10;

//     // constructor( @InjectRepository(Users) private usersRepository: Repository<Users>) { }

//     async getUsers(): Promise<Users[]> {

//         return await this.find();

//     }
//     // tslint:disable-next-line:variable-name
//     async getUser(_id: number): Promise<Users[]> {
//         return await this.find({
//             select: ['email', 'password', 'isAdmin'],
//             where: [{ id: _id }],
//         });
//     }
//     async createUser(user: Users) {
//         return await this.insert(user);
//     }
//     // tslint:disable-next-line:variable-name
//     async updateUser(_id: number, user: Users) {
//         return await this.update(_id, user);
//     }
//     async deleteUser(user: Users) {
//         this.delete(user);
//     }
// }

import { Injectable, Inject } from '@nestjs/common';
import { Book} from '../models/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../models/users.entity';

// @EntityRepository(Book)

@Injectable()
export class UsersRepository {
    constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof Users) {
    }

    async getUsers(): Promise<Users[]> {
        return await this.usersRepository.findAll<Users>();
    }

}
