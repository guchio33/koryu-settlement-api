import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { TaskModule } from './task/task.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessageModule, TaskModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
