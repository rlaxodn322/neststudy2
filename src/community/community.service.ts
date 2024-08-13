import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Community } from './commnity.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
  ) {}

  async findAll(): Promise<Community[]> {
    return this.communityRepository.find();
  }

  async create(post: Partial<Community>): Promise<Community> {
    const newPost = this.communityRepository.create(post);
    return this.communityRepository.save(newPost);
  }

  async delete(id: number): Promise<void> {
    const result = await this.communityRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }
}
