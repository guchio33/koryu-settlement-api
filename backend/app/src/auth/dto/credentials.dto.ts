import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CredentialsDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
