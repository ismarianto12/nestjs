import { Module } from '@nestjs/common';
import { CrudController } from './crud.controllers';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './UsersController';

@Module({
  imports: [AuthModule],
  controllers: [AppController, CrudController, UsersController],
  providers: [AppService],
})
export class AppModule { }
