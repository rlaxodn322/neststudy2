// src/posts/posts.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.entity';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async findAll(): Promise<Board[]> {
    return this.boardsService.findAll();
  }

  @Post()
  async create(
    @Body() post: Omit<Board, 'id' | 'createdAt' | 'updatedAt' | 'likes'>,
  ): Promise<Board> {
    return this.boardsService.create(post);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() post: Partial<Board>,
  ): Promise<Board> {
    return this.boardsService.update(id, post);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.boardsService.delete(id);
  }

  @Post(':id/like')
  async like(@Param('id') id: number): Promise<Board> {
    return this.boardsService.like(id);
  }
}
