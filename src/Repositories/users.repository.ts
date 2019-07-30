import { Injectable, Inject } from '@nestjs/common';
import { User} from '../models/users.model';

// @EntityRepository(Book)

@Injectable()
export class UsersRepository {
    constructor(@Inject('USERS_REPOSITORY') private usersRepository: typeof User) {
    }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.findAll<User>();
    }

    // tslint:disable-next-line:variable-name
    async getUser(_id: number): Promise<User> {
        return await this.usersRepository.findOne({
            where: { id: _id },
        });
    }

    // tslint:disable-next-line:variable-name
    async getUserByEmail(_email: string): Promise<User> {
        const user = await this.usersRepository.findOne({
            where: { email: _email },
        });
        return user;
    }
    async createUser(user: User) {
        return await this.usersRepository.create(user);
    }
    // tslint:disable-next-line:variable-name
    async updateUser(_id: number, user: User) {
        return await this.usersRepository.update(user, {where: {id: _id}} );
    }
    // tslint:disable-next-line:variable-name
    async deleteUser(_id: number) {
        return await  this.usersRepository.destroy({where: {id: _id}});
    }
}
