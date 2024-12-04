import { Module } from '@nestjs/common';
import { MessagerieService } from './messagerie.service';

@Module({
  providers: [MessagerieService]
})
export class MessagerieModule {}
