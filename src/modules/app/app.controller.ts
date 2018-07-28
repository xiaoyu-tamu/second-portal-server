import { Get, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public appInfo() {
    return this.appService.info();
  }
}
