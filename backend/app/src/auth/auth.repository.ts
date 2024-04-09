import {PrismaClient} from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

class AuthRepository{
  async createUser(email:string, password:string){
    const saltOrRounds = 10;

    //ソルトを作成
    const salt = await bcrypt.genSalt(saltOrRounds);

    //パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.user.create({
      data:{
        email,
        hashedPassword,
        salt,
      }
    })
    console.log(user)
    return user;
  }
}

export default new AuthRepository();