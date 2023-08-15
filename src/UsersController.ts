import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PrismaService } from '../service/prismaservice';
import { User } from '../model/user.model';

@Controller('users')

export class UsersController {
  constructor(private readonly prismaService: PrismaService) { }

  @Get()
  async getAllUsers() {
    return this.prismaService.user.findMany();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  @Post()
  async createUser(@Body() user) {
    return this.prismaService.user.create({
      data: user,
    });
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User) {
    return this.prismaService.user.update({
      where: { id },
      data: user,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}

