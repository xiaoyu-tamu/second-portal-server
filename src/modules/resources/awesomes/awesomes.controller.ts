import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { BaseController } from '../controller.interface';
import { create } from 'domain';

@Controller('awesomes')
export class AwesomesController implements BaseController {
  @Get()
  findAll() {
    return `findAll route works`;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `findById route works, id: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return `create route works, body: ${body}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete route works, id: ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return `update route works, id: ${id} body: ${body}`;
  }
}
