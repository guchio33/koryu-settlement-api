import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthRepository } from './auth.repository';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStorategy extends PassportStrategy(Strategy) {
  constructor(
    private authRepository: AuthRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: { id: string; email: string }) {
    const { email } = payload;
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
