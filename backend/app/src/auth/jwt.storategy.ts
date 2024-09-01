import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthRepository } from './auth.repository';
import { ignoreElements } from 'rxjs';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStorategy extends PassportStrategy(Strategy) {
  constructor(private authRepository: AuthRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: {id: string; email: string}) {
    const {id, email } = payload;
    const user = await this.authRepository.findOne(email);
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException(
        'メールアドレスまたはパスワードを確認してください。',
      );
    }
  }
}
