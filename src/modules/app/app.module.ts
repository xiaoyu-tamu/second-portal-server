import { Module, DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesModule } from '../resources/resources.module';

@Module({
  imports: [ResourcesModule, MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
