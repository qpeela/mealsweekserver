import { Test, TestingModule } from '@nestjs/testing';
import { MealsController } from './meals.controller';
import { MealsService } from '../services/meals.service';

describe('MealsController', () => {
  let appController: MealsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MealsController],
      providers: [MealsService],
    }).compile();

    appController = app.get<MealsController>(MealsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll()).toBe('Hello World!');
    });
  });
});
