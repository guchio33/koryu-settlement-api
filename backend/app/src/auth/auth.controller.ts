import { Controller,Post,Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @Post()
  createUser(){
    return 
  }

  @Get('/:id')
  getUser(@Param('id') id: number){
    return  "あなたのuserIdは:"+id+"です。"
  }
}
