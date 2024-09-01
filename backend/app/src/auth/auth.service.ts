import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/create_user_dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.authRepository.createUser(createUserDto);
    return user;
  }

  async login(createUserDto: CreateUserDto) {
    const user = await this.authRepository.createUser(createUserDto);
    return user;
  }
}
