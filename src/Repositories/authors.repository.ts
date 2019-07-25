import { Injectable, Inject } from '@nestjs/common';
import { Book } from '../models/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../models/authors.entity';

// @EntityRepository(Book)

@Injectable()
export class AuthorRepository {
    constructor(@Inject('AUTHORS_REPOSITORY') private authorRepository: typeof Author) {
    }

    async getAuthors(): Promise<Author[]> {
        return await this.authorRepository.findAll<Author>();
    }

    // tslint:disable-next-line:variable-name
    // async getAuthor(_id: number): Promise<Book[]> {
    //     return await this.findById( _id);
    // }

    // async createAuthor(author: Author) {
    //     return await this.insert(author);
    // }

    // // tslint:disable-next-line:variable-name
    // async updateAuthor(_id: number, author: Author) {
    //   return await  this.update(_id, author );
    // }

    // async deleteAuthor(book: Book) {
    //     this.delete(book);
    // }
}
