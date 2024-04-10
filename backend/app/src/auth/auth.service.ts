import { Injectable } from '@nestjs/common';
import AuthRepository from './auth.repository';

@Injectable()
export class AuthService {
  async createUser(email:string, password:string){
    const user = await AuthRepository.createUser(email, password);
    return user;
  }
}

export default new AuthService();