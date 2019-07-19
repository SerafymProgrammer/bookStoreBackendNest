import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(token: string) {
    const user = await this.authService.validateUserByToken(token);
    // tslint:disable-next-line:no-console
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
