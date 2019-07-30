import { Injectable, Inject } from '@nestjs/common';
import { User} from '../models/users.model';
import { UsersRepository } from '../repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    private saltRounds = 10;
    constructor(private usersRepository: UsersRepository) { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.getUsers();
    }

    // tslint:disable-next-line:variable-name
    async getUser(_id: number): Promise<User> {
        return await this.usersRepository.getUser(_id);
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.getUserByEmail(email);
    }

    async createUser(user: User) {
      //  tslint:disable-next-line:variable-name
        const _users =  await  this.usersRepository.getUsers();
        let count = 0;
        // tslint:disable-next-line:variable-name
        for (const _user of _users) {
             if ((_user.email === user.email)) {
                count++;
            }
        }
        if (count > 0) {
            alert('User ');
            return;
        }
        user.password = await bcrypt.hash(user.password, this.saltRounds);
        return await this.usersRepository.createUser(user);
    }

    // tslint:disable-next-line:variable-name
    async updateUser(_id: number, user: User ) {
      return await  this.usersRepository.updateUser(_id, user);
    }

    // tslint:disable-next-line:variable-name
    async deleteUser(_id: number) {
        this.usersRepository.deleteUser(_id);
    }
}
