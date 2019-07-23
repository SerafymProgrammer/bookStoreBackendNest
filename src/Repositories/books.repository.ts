import { Injectable } from '@nestjs/common';
import { Books } from '../models/books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookRepository {
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
