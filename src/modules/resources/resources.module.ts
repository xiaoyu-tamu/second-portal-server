import { Module } from '@nestjs/common';
import { AwesomesModule } from './awesomes/awesomes.module';

@Module({
  imports: [AwesomesModule],
  exports: [AwesomesModule],
})
export class ResourcesModule {}
