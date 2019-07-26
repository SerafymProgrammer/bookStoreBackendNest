import { Injectable, Inject } from '@nestjs/common';
import { Book} from '../models/books.entity';
import { AuthorsBooks } from '../models/author-book.entity';
import { Author} from '../models/authors.entity';

// @EntityRepository(Book)

@Injectable()
export class BooksRepository {
    constructor(@Inject('BOOKS_REPOSITORY') private booksRepository: typeof Book,
                @Inject('AUTHORS_BOOKS_REPOSITORY') private authorsBooksRepository: typeof AuthorsBooks) {

    }

    async getBooks(): Promise<any> {
        const AuthorBook = await this.authorsBooksRepository.findAll<AuthorsBooks>({
            include: [
                Author,
                Book,
            ],
        });
        const books = await this.booksRepository.findAll<Book>({
            include: [
                AuthorsBooks,
            ],
        });
        return AuthorBook;
    }

    // tslint:disable-next-line:variable-name
    async getBook(_id: number): Promise<Book> {
        return await this.booksRepository.findOne({
            where: { id: _id },
        });
    }

    async createBook(book: Book) {
        return await this.booksRepository.create(book);
    }

    // tslint:disable-next-line:variable-name
    async updateBook(_id: number, book: Book) {
      return await  this.booksRepository.update(book, {where: {id: _id}});
    }

    // tslint:disable-next-line:variable-name
    async deleteBook(_id: number) {
       return await  this.booksRepository.destroy({where: {id: _id}});
    }
}
