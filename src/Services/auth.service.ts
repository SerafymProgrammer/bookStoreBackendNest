import { Injectable, Inject } from '@nestjs/common';
import { User } from '../models/users.model';
import { JwtService } from '@nestjs/jwt';
// tslint:disable-next-line:import-spacing
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import jwtDecode = require('jwt-decode');
import { async } from 'async';

// decoded = jwt_decode(token)

@Injectable()
export class AuthService {
  public  async comparePasswords(passwordLogin, passwordReally): Promise<boolean> {
        return bcrypt.compare(passwordLogin, passwordReally);
      }

  constructor(private readonly usersService: UsersService,
              private readonly jwtService: JwtService) {}

    private async validate(userData: User): Promise<User> {
        const {email } = userData;
        const user = await this.usersService.getUserByEmail(email);
        return user;
    }
    public async validateUserByToken(token) {
        const decodedUser = jwtDecode(token);

        return await decodedUser;
    }

    public async login(user: User) {
            return this.validate(user);
    }

    public async register(user: User): Promise<any> {
        // tslint:disable-next-line:no-console
        console.log(user);
        return this.usersService.createUser(user);
    }

}
