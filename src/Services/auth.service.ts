import { Injectable, Inject } from '@nestjs/common';
import { Users } from '../models/users.entity';
import { JwtService } from '@nestjs/jwt';
import { throwError } from 'rxjs';
// tslint:disable-next-line:import-spacing
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import jwtDecode = require('jwt-decode');
import { async } from 'async';

// decoded = jwt_decode(token)

// @Injectable()
export class AuthService {
//   public  async comparePasswords(passwordLogin, passwordReally): Promise<boolean> {
//         return bcrypt.compare(passwordLogin, passwordReally);
//       }

//   constructor(private readonly usersService: UsersService,
//               private readonly jwtService: JwtService) {}

//     private async validate(userData: Users): Promise<Users> {
//         const {email } = userData;
//         const qb = await getRepository(Users)
//             .createQueryBuilder('user')
//             .where('user.email = :email', { email });

//         const user = await qb.getOne();
//         return user;
//     }
//     public async validateUserByToken(token) {
//         const decodedUser = jwtDecode(token);

//         return await decodedUser;
//     }

//     public async login(user: Users) {
//             return this.validate(user);
//     }

//     public async register(user: Users): Promise<any> {
//         // tslint:disable-next-line:no-console
//         console.log(user);
//         return this.usersService.createUser(user);
//     }

}
