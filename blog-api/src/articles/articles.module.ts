/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
