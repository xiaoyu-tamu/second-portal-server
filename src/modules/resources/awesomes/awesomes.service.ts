import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AwesomesModel, Awesomes } from './metadata/awesome.interface';
import { CreateAwesomeDto } from './metadata/awesome.dto';

@Injectable()
export class AwesomesService {
  constructor(@InjectModel('Awesome') private readonly awesomeModel: AwesomesModel) {}

  async create(awesomes: CreateAwesomeDto) {
    return new this.awesomeModel(awesomes).save();
  }

  async delete(query: Object) {
    return await this.awesomeModel.findOneAndRemove(query);
  }

  async update(query: Object, data: any) {
    return await this.awesomeModel.findOneAndUpdate(query, data);
  }

  async findAll() {
    return this.awesomeModel.find().exec();
  }

  async findById(id: string) {
    return this.awesomeModel.findById(id).exec();
  }

  async count() {
    return this.awesomeModel.estimatedDocumentCount();
  }
}
