import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}
  @Get()
  getAllMessages(): string[] {
    return this.messagesService.getMessages();
  }
  @Post()
  addMessage(@Body('message') message: string): string {
    return this.messagesService.addMessage(message);
  }
}
