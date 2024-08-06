import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return this.messagesService.findAll();
  }
  @Post()
  async create(@Body() body: { message: string }): Promise<Message> {
    const { message } = body;
    if (!message) {
      throw new BadRequestException('Content is required');
    }
    return this.messagesService.create(message);
  }
}
