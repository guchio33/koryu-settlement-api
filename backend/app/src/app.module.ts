import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsRepository } from './items/items.repository';

@Module({
  imports: [AuthModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService, ItemsRepository],
})
export class AppModule {}
