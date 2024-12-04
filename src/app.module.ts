import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathsModule } from './maths/maths.module';
import { LoggerModule } from './logger/logger.module';
import { ValidationModule } from './validation/validation.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MessagerieModule } from './messagerie/messagerie.module';
import { OrderModule } from './order/order.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [MathsModule, LoggerModule, ValidationModule, AuthModule, UserModule, MessagerieModule, OrderModule, DiscountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
