import { Injectable, Inject } from '@nestjs/common';

import { Author} from '../models/authors.entity';

// @EntityRepository(Book)

@Injectable()
export class AuthorsRepository {
    constructor(@Inject('AUTHORS_REPOSITORY') private authorsRepository: typeof Author) {
    }

    async getAuthors(): Promise<Author[]> {
        return await this.authorsRepository.findAll<Author>();
    }

    // tslint:disable-next-line:variable-name
    // async getAuthors(_id: number): Promise<Book[]> {
    //     return await this.findById( _id);
    // }

    // async createAuthors(Authors: Authors) {
    //     return await this.insert(Authors);
    // }

    // // tslint:disable-next-line:variable-name
    // async updateAuthors(_id: number, Authors: Authors) {
    //   return await  this.update(_id, Authors );
    // }

    // async deleteAuthors(book: Book) {
    //     this.delete(book);
    // }
}
