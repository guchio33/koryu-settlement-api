import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create_user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

const prisma = new PrismaClient();

@Injectable()
export class AuthRepository {
  constructor(private readonly jwtService: JwtService) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  async login(credentialsDto: CredentialsDto) {
    const { email, password } = credentialsDto;
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, email: user.email };
      console.log(payload);
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        'メールアドレスまたはパスワードを確認してください。',
      );
    }
  }
}
