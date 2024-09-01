import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create_user_dto';
// import { createCipheriv, randomBytes, scrypt } from 'crypto';

const prisma = new PrismaClient();

export class AuthRepository {
  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    return prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  login(email: string, password: string) {
    console.log(email, password);
  }
}
