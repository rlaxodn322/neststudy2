import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  private messages: string[] = [];

  getMessages(): string[] {
    return this.messages;
  }

  addMessage(message: string): string {
    this.messages.push(message);
    return message;
  }
}

