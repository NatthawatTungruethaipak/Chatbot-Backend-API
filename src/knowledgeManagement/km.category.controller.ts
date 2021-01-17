import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/category.create.dto';
import { CategoryService } from './km.category.service';
import { UpdateCategoryDto } from './dto/category.update.dto';

@Controller('km/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategory(): Promise<CategoryDto[]> {
    return await this.categoryService.getAllCategory();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string): Promise<CategoryDto> {
    return await this.categoryService.getCategoryById(id);
  }

  @Patch()
  async updateCategory(
    @Body('id') id: string,
    @Body('update') updateCategoryDto: UpdateCategoryDto
  ): Promise<CategoryDto> {
    return await this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryDto> {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Delete()
  async deleteCategory(@Body('id') id: string): Promise<CategoryDto> {
    return await this.categoryService.deleteCategoryById(id);
  }
}