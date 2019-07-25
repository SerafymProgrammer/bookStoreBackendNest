import { Injectable, Inject } from '@nestjs/common';
import { Book } from '../models/books.entity';
import { BookRepository } from '../Repositories/books.repository';

@Injectable()
export class BooksService {
    constructor(private bookRepository: BookRepository) { }

    async getBooks(): Promise<Book[]> {
        return await this.bookRepository.getBooks();
    }

    // tslint:disable-next-line:variable-name
    // async getBook(_id: number): Promise<Book[]> {
    //     return await this.bookRepository.getBooks();
    // }

    // async createBook(book: Book) {
    //     // tslint:disable-next-line:variable-name
    //     const _books =  await  this.getBooks();
    //     let count = 0;
    //     // tslint:disable-next-line:variable-name
    //     for (const _book of _books) {
    //         if ((book.name === _book.name) && (book.author === _book.author)) {
    //             count++;
    //         }
    //     }
    //     if (count > 0) {
    //         alert('Такая книга уже существует');
    //         return;
    //     }
    //     return await this.bookRepository.createBook(book);
    // }

    // // tslint:disable-next-line:variable-name
    // async updateBook(_id: number, book: Book ) {
    //   return await  this.bookRepository.updateBook(_id, book );
    // }

    // async deleteBook(book: Book) {
    //     this.bookRepository.deleteBook(book);
    // }

}
