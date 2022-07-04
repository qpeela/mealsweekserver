import { Body, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Meal, MealDocument } from '../schemas/meal.schema';
import { CreateMealDto } from '../dto/create-meal.dto';

@Injectable()
export class MealsService {
  constructor(@InjectModel(Meal.name) private mealModel: Model<MealDocument>) {}

  async create(@Body() mealDto: CreateMealDto) {
    const createdMeal = new this.mealModel(mealDto);
    return createdMeal.save();
  }

  async findAll(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }
}
