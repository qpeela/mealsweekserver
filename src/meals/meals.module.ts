import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MealsController } from './controllers/meals.controller';
import { MealsService } from './services/meals.service';
import { MealSchema, Meal } from './schemas/meal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
