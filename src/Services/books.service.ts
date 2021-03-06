import { Injectable, Inject } from '@nestjs/common';
import { Book } from '../models/books.model';
import { BooksRepository } from '../repositories/books.repository';

@Injectable()
export class BooksService {
    constructor(private bookRepository: BooksRepository) { }

    async getBooks(): Promise<Book[]> {
        return await this.bookRepository.getBooks();
    }

    // tslint:disable-next-line:variable-name
    async getBook(_id: number): Promise<Book> {
        return await this.bookRepository.getBooks();
    }

    async createBook(book: Book) {
        // tslint:disable-next-line:variable-name
        const _books = await this.getBooks();
        let count = 0;
        // tslint:disable-next-line:variable-name
        for (const _book of _books) {
            if ((book.name === _book.name)) {
                count++;
            }
        }
        if (count > 0) {
            alert('Такая книга уже существует');
            return;
        }
        return await this.bookRepository.createBook(book);
    }

    // tslint:disable-next-line:variable-name
    async updateBook(_id: number, book: Book) {
        return await this.bookRepository.updateBook(_id, book);
    }

    // tslint:disable-next-line:variable-name
    async deleteBook(_id: number) {
        this.bookRepository.deleteBook(_id);
    }

}
