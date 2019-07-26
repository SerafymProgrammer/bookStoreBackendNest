import { Injectable, Inject } from '@nestjs/common';
import { Author} from '../models/authors.entity';
import { AuthorsRepository } from '../repositories/authors.repository';

@Injectable()
export class AuthorsService {
  constructor(
    // tslint:disable-next-line:variable-name
    private authorsRepository: AuthorsRepository) {}

  async findAllAuthors(): Promise<Author[]> {
    return await this.authorsRepository.getAuthors();
  }
}
