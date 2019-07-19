import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from './books.entity';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(Books) private booksRepository: Repository<Books>) { }

    async getBooks(): Promise<Books[]> {
        return await this.booksRepository.find();
    }

    // tslint:disable-next-line:variable-name
    async getBook(_id: number): Promise<Books[]> {
        return await this.booksRepository.find({
            select: ['name', 'author', 'description', 'price', 'img'],
            where: [{ id: _id }],
        });
    }

    async createBook(book: Books) {
        // tslint:disable-next-line:variable-name
        const _books =  await  this.booksRepository.find();
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
        return await this.booksRepository.insert(book);
    }

    // tslint:disable-next-line:variable-name
    async updateBook(_id: number, book: Books ) {
      return await  this.booksRepository.update(_id, book );
    }

    async deleteBook(book: Books) {
        this.booksRepository.delete(book);
    }

}
