import { Module } from '@nestjs/common';
import { MathsService } from './maths.service';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [LoggerService],
  providers: [MathsService]
})
export class MathsModule {}
