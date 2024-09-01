import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create_user_dto';
// import { createCipheriv, randomBytes, scrypt } from 'crypto';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class AuthRepository {
  async createUser(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
  }

  login(email: string, password: string) {
    console.log(email, password);
  }
}
