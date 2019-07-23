import { Controller, Post, Body, Get, Put, Delete, Param, UseGuards} from '@nestjs/common';
import { UsersService } from '../Services/users.service';
import { Users } from '../models/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    @Get()
   // @UseGuards(AuthGuard('bearer'))
    getAll() {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('bearer'))
    update(@Body() user: Users, @Param() params) {
        return this.service.updateUser(params.id, user);
    }

    @Put('currUser/:id')
    updateCurrentUser(@Body() user: Users, @Param() params) {
        return this.service.updateUser(params.id, user);
    }

    @Post()
    create(@Body() user: Users) {
        return this.service.createUser(user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('bearer'))
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}
