import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create_user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.createUser(createUserDto);

    //オブジェクトを返す
    return { user };
  }

  @Post('/login')
  async login(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.login(createUserDto);

    //オブジェクトを返す
    return { user };
  }

  @Get('/:id')
  getUser(@Param('id') id: number) {
    return 'あなたのuserIdは:' + id + 'です';
  }
}
