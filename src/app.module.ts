import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [DbModule, MealsModule, AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
