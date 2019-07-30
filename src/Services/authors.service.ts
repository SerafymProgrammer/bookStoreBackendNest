import { Injectable, Inject } from '@nestjs/common';
import { Author} from '../models/authors.model';
import { AuthorsRepository } from '../repositories/authors.repository';

@Injectable()
export class AuthorsService {
  constructor(
    // tslint:disable-next-line:variable-name
    private authorsRepository: AuthorsRepository) {}

  async getAuthors(): Promise<Author[]> {
    return await this.authorsRepository.getAuthors();
  }

  // tslint:disable-next-line:variable-name
  async getAuthor(_id: number): Promise<Author> {
    return await this.authorsRepository.getAuthor(_id);
}

async createAuthor(author: Author) {
    // tslint:disable-next-line:variable-name
    const _authors =  await  this.authorsRepository.getAuthors();
    let count = 0;
    // tslint:disable-next-line:variable-name
    for (const _author of _authors) {
         if ((_author.name === author.name)) {
            count++;
        }
    }
    if (count > 0) {
        alert('Author');
        return;
    }
    return await  this.authorsRepository.createAuthors(author);
}

// tslint:disable-next-line:variable-name
async updateAuthor(_id: number, author: Author ) {
  return await  this.authorsRepository.updateAuthors(_id, author );
}

// tslint:disable-next-line:variable-name
async deleteAuthor(_id: number) {
    this.authorsRepository.deleteAuthors(_id);
}
}
