/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticlesService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports:[TypeOrmModule.forFeature([Article]), CategoryModule],
  controllers: [ArticleController],
  providers: [ArticlesService]
})
export class ArticleModule {}
