// src/posts/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './boards.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardsRepository.find();
  }

  async findOne(id: number): Promise<Board> {
    const post = await this.boardsRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async create(post: Partial<Board>): Promise<Board> {
    const newPost = this.boardsRepository.create(post);
    return this.boardsRepository.save(newPost);
  }

  

  async update(id: number, post: Partial<Board>): Promise<Board> {
    const existingPost = await this.boardsRepository.findOneBy({ id });
    if (!existingPost) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    await this.boardsRepository.update(id, post);
    return this.boardsRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    const result = await this.boardsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }

  async like(id: number): Promise<Board> {
    const post = await this.boardsRepository.findOneBy({ id });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    post.likes += 1;
    return this.boardsRepository.save(post);
  }
}
