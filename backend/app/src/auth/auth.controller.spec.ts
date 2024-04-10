import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('新規登録', async() => {
      const email = 'test@example.com';
      const password = 'password';
      const mockUser = {
        id: 1,
        email: 'test@example.com',
        createdAt: new Date(),
        updateAt: new Date(), // 現在の日時を設定
        hashedPassword: 'hashedPassword',
        salt: 'salt'
      };

      const createUserSpy = jest.spyOn(authService, 'createUser').mockResolvedValue(mockUser);

      // register メソッドを呼び出し
      const result =  controller.register(email, password);

      // メソッドが正常に呼び出され、期待通りの結果が返されることを検証
      expect(createUserSpy).toHaveBeenCalledWith(email, password);
      expect(await result).toEqual({ user: mockUser });
    });
  });

  describe('getUser', () => {
    it('should return a message with user ID', () => {
      const userId = 1;
      const expectedResult = 'あなたのuserIdは:1です。';
      
      // getUserメソッドを呼び出し、結果を取得
      const result = controller.getUser(userId);
  
      // 期待される結果と実際の結果を比較
      expect(result).toBe(expectedResult);
    });
  });
});
