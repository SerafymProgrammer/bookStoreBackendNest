import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { BooksService } from '../services/books.service';
import { Book } from '../models/books.model';
import { AuthorsService } from '../services/Authors.service';

@Controller('authors')
export class AuthorsController {

    constructor(private service: AuthorsService) { }
    @Get()
    getAll() {
        return this.service.getAuthors();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAuthor(params.id);
    }

    @Post()
    create(@Body() book: Book) {
        return this.service.createAuthor(book);

    }

    @Put(':id')
    update(@Body() book: Book, @Param() params) {
        return this.service.updateAuthor(params.id, book);
    }

    @Delete(':id')
    deleteAuthor(@Param() params) {
        return this.service.deleteAuthor(params.id);
    }
}
