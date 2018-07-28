import { Module } from '@nestjs/common';
import { AwesomesController } from './awesomes.controller';
import { AwesomesService } from './awesomes.service';

/**
 * Curated list of awesome resourses for web developers
 */
@Module({
  controllers: [AwesomesController],
  providers: [AwesomesService],
})
export class AwesomesModule {}
