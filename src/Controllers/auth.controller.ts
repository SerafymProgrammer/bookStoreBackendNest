import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Users } from '../models/users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {

    // constructor(private authService: AuthService,
    //             private jwtService: JwtService) { }

    // @Post('login')
    // async login(@Body() user: Users): Promise<any> {
    //   return this.authService.login(user).then(async (userData) => {
    //     if (!userData) {
    //         return { status: 404 };
    //     }

    //     const isTruePassword = await bcrypt.compare(user.password, userData.password);

    //     if (!isTruePassword) {
    //        return;
    //     }
    //     const payload = {isAdmin: userData.isAdmin,
    //     id: userData.id,
    //     email: userData.email,
    //     };
    //     const accessToken = {userToken: this.jwtService.sign(JSON.stringify(payload)), img: userData.img};
    //     return accessToken;

    // });
    // }

    // @Post('register')
    // async register(@Body() user: Users): Promise<any> {
    //   // tslint:disable-next-line:no-console
    //   console.log(user);
    //   return this.authService.register(user);
    // }
}
