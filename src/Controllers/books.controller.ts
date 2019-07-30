import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../models/books.model';

@Controller('books')
export class BooksController {

    constructor(private service: BooksService) { }
    @Get()
    getAll() {

        return this.service.getBooks();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getBook(params.id);
    }

    @Post()
    create(@Body() book: Book) {
        return this.service.createBook(book);

    }

    @Put(':id')
    update(@Body() book: Book, @Param() params) {
        return this.service.updateBook(params.id, book);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteBook(params.id);
    }
}
