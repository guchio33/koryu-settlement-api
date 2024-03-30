import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import {CreateMessageDto} from './create-message.dto'

@Controller('messages')
export class MessagesController {
  constructor() {}
  @Get()
  listMessages(): string{
    return "message"
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {}

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id
  }
}
