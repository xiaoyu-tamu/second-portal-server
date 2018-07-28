import { Module } from '@nestjs/common';
import { AwesomesController } from './awesomes.controller';
import { AwesomesService } from './awesomes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { awesomeSchema } from './awesome.schema';

/**
 * Curated list of awesome resourses for web developers
 */
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Awesome', schema: awesomeSchema }])],
  controllers: [AwesomesController],
  providers: [AwesomesService],
})
export class AwesomesModule {}
