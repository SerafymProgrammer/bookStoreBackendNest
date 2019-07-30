import { Injectable, Inject } from '@nestjs/common';
import { Author} from '../models/authors.model';

@Injectable()
export class AuthorsRepository {
    constructor(@Inject('AUTHORS_REPOSITORY') private authorsRepository: typeof Author) {
    }

    async getAuthors(): Promise<Author[]> {
        return await this.authorsRepository.findAll<Author>();
    }

    // tslint:disable-next-line:variable-name
    async getAuthor(_id: number): Promise<Author> {
        return await this.authorsRepository.findOne( {
            where: { id: _id },
        });
    }

    async createAuthors(author: Author) {
        return await this.authorsRepository.create(author);
    }

    // // tslint:disable-next-line:variable-name
    // tslint:disable-next-line:variable-name
    async updateAuthors(_id: number, author: Author) {
      return await  this.authorsRepository.update( author , {where: {id: _id}});
    }

    // tslint:disable-next-line:variable-name
    async deleteAuthors(_id: number) {
        this.authorsRepository.destroy({where: {id: _id}});
    }

}
