import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private saltRounds = 10;

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async getUsers(): Promise<Users[]> {
        return await this.usersRepository.find();
    }

    // tslint:disable-next-line:variable-name
    async getUser(_id: number): Promise<Users[]> {
        return await this.usersRepository.find({
            select: ['email', 'password', 'isAdmin'],
            where: [{ id: _id }],
        });
    }

    async createUser(user: Users) {
        // tslint:disable-next-line:variable-name
        const _users =  await  this.usersRepository.find();
        // tslint:disable-next-line:variable-name
        let _isAdmin = false;

        let count = 0;
        for (const userDB of _users) {
            if ((userDB.email === user.email)) {
                count++;
            }
        }
        if (count > 0) {
            return;
        }
        user.password = await bcrypt.hash(user.password, this.saltRounds);

        if (user.email === 'admin@gmail.com') {
            _isAdmin = true;
          }
        return await this.usersRepository.insert( Object.assign(user, { isAdmin: _isAdmin }));
    }

    // tslint:disable-next-line:variable-name
    async updateUser(_id: number, user: Users ) {
        return await  this.usersRepository.update(_id, user );
    }

    async deleteUser(user: Users) {
        this.usersRepository.delete(user);
    }
}
