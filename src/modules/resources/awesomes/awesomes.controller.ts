import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { BaseController } from '../controller.interface';
import { AwesomesService } from './awesomes.service';

@Controller('api/awesomes')
export class AwesomesController implements BaseController {
  constructor(private readonly awesomesService: AwesomesService) {}

  @Get()
  findAll() {
    return this.awesomesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.awesomesService.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.awesomesService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.awesomesService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.awesomesService.update({ _id: id }, body);
  }
}
