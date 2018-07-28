import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = module.get(AppService);
    appController = module.get(AppController);
  });

  describe('apiInfo', () => {
    it('should return the application metadata', async () => {
      const result = {
        api_version: '1.0',
        package_version: '0.0.0',
        app_name: 'second-portal-server',
        app_description: 'description',
      };

      jest.spyOn(appService, 'info').mockImplementation(() => result);

      expect(await appController.appInfo()).toBe(result);
    });
  });
});
