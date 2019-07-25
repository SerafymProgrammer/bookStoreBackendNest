import { Injectable, Inject } from '@nestjs/common';
import { Author } from '../models/authors.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('AUTHORS_REPOSITORY') private readonly AUTHORS_REPOSITORY: typeof Author) {}

  async findAllAuthors(): Promise<Author[]> {
    return await this.AUTHORS_REPOSITORY.findAll<Author>();
  }
}
