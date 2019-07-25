import { Injectable, Inject } from '@nestjs/common';
import { Book } from '../models/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityRepository } from 'typeorm';
import { AuthorBook } from '../models/author-book.entity';
import { Author } from '../models/authors.entity';

// @EntityRepository(Book)

@Injectable()
export class BookRepository {
    constructor(@Inject('BOOKS_REPOSITORY') private booksRepository: typeof Book,
                @Inject('AUTHORS_BOOKS_REPOSITORY') private authorBookRepository: typeof AuthorBook) {

    }

    async getBooks(): Promise<Book[]> {
        const authorBooks = await this.authorBookRepository.findAll<AuthorBook>({
            include: [
                Author,
                Book,
            ],
        });
        const books = await this.booksRepository.findAll<Book>({
            include: [
                AuthorBook,
            ],
        });
        return books;
    }

    // // tslint:disable-next-line:variable-name
    // async getBook(_id: number): Promise<Book[]> {
    //     return await this.find(/*{
    //         select: ['name', 'author', 'description', 'price', 'img'],
    //         where: [{ id: _id }],
    //     }*/);
    // }

    // async createBook(book: Book) {
    //     return await this.insert(book);
    // }

    // // tslint:disable-next-line:variable-name
    // async updateBook(_id: number, book: Book) {
    //   return await  this.update(_id, book );
    // }

    // async deleteBook(book: Book) {
    //     this.delete(book);
    // }
}
