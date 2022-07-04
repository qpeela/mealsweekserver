import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { MealsService } from '../services/meals.service';
import { MealInterface } from '../interfaces/meal.interface';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('meals')
export class MealsController {
  constructor(private mealsService: MealsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<MealInterface[]> {
    return this.mealsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createMeal) {
    await this.mealsService.create(createMeal);
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `id: ${params.id}`;
  }

  @Get('bookmark')
  findBookmarkMeals() {
    return 'this bookmark meals';
  }
}
