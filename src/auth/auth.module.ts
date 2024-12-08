import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';


@Module({
  imports: [UserService],
  providers: [AuthService]
})
export class AuthModule {}
