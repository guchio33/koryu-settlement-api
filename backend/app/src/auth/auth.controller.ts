import { Controller,Post,Get, Param,Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body('email') email: string, @Body('password') password:string){
    const user = await this.authService.createUser(email,password)

    //オブジェクトを返す
    return { user };
  }

  @Get('/:id')
  getUser(@Param('id') id: number){
    return  "あなたのuserIdは:"+id+"です。"
  }
}
