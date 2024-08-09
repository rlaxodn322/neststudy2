import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}
  async findAll(): Promise<Message[]> {
    return this.messageRepository.find();
  }
  async create(content: string): Promise<Message> {
    //console.log(content);
    const message = new Message();
    message.content = content;
    return this.messageRepository.save(message);
  }
  async delete(id: number): Promise<void> {
    await this.messageRepository.delete(id);

  }
}
