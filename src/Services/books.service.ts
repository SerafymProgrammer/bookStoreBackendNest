import { Injectable, Inject } from '@nestjs/common';
import { Books } from '../models/books.entity';
import { BookRepository } from '../Repositories/books.repository';

@Injectable()
export class BooksService {
    constructor(private bookRepository: BookRepository) { }

    async getBooks(): Promise<Books[]> {
        return await this.bookRepository.getBooks();
    }

    // tslint:disable-next-line:variable-name
    async getBook(_id: number): Promise<Books[]> {
        return await this.bookRepository.getBooks();
    }

    async createBook(book: Books) {
        // tslint:disable-next-line:variable-name
        const _books =  await  this.getBooks();
        let count = 0;
        // tslint:disable-next-line:variable-name
        for (const _book of _books) {
            if ((book.name === _book.name) && (book.author === _book.author)) {
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
    async updateBook(_id: number, book: Books ) {
      return await  this.bookRepository.updateBook(_id, book );
    }

    async deleteBook(book: Books) {
        this.bookRepository.deleteBook(book);
    }

}
