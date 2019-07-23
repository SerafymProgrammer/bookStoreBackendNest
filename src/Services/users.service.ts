import { Injectable, Inject } from '@nestjs/common';
import { Users } from '../models/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from '../Repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    private saltRounds = 10;

    constructor(@InjectRepository(UsersRepository)
        private userRepository: UsersRepository) { }

    async getUsers(): Promise<Users[]> {
        return await this.userRepository.getUsers();
    }

    // tslint:disable-next-line:variable-name
    async getUser(_id: number): Promise<Users[]> {
        // tslint:disable-next-line:variable-name
        const _users = await this.userRepository.getUser(_id);
        return _users;
    }

    async createUser(user: Users) {
        // tslint:disable-next-line:variable-name
        const _users =  await  this.getUsers();
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
        return await this.userRepository.createUser( Object.assign(user, { isAdmin: _isAdmin }));
    }

    // tslint:disable-next-line:variable-name
    async updateUser(_id: number, user: Users ) {
        return await  this.userRepository.updateUser(_id, user );
    }

    async deleteUser(user: Users) {
        this.userRepository.deleteUser(user);
    }
}
