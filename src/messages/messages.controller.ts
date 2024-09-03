import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
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
      throw new BadRequestException('Content is required message');
    }
    return this.messagesService.create(message);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.messagesService.delete(id);
  }
}
