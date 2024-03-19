import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MessageModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
