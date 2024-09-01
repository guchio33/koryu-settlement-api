import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { CreateUserDto } from './dto/create_user.dto';
import { CredentialsDto } from './dto/credentials.dto';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.authRepository.createUser(createUserDto);
  }

  async login(credentialsDto: CredentialsDto) {
    return this.authRepository.login(credentialsDto);
  }
}
