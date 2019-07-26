// import { Injectable, Inject } from '@nestjs/common';
// import { Users } from '../models/user.entity';
// import * as bcrypt from 'bcrypt';
// import { UsersRepository } from '../Repositories/user.repository';
// import { InjectRepository } from '@nestjs/typeorm';

// // @Injectable()
// export class UsersService {
    // private saltRounds = 10;

    // constructor(@InjectRepository(UsersRepository)
    //     private userRepository: UsersRepository) { }

    // async getUsers(): Promise<Users[]> {
    //     return await this.userRepository.getUsers();
    // }

// }
import { Injectable, Inject } from '@nestjs/common';
import { Users } from '../models/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) { }

    async getUsers(): Promise<Users[]> {
        return await this.usersRepository.getUsers();
    }

    
}
