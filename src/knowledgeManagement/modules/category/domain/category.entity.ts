import { Category as CategoryInterface } from '../category.interface';
import { BaseEntity } from '@BaseObject';
import { Entity, Column, OneToMany } from 'typeorm';
import { Subcategory } from '../../subcategory/domain/subcategory.entity';
import { CategoryDto } from 'knowledgeManagement/modules/category/dto/category.dto';

@Entity()
export class Category extends BaseEntity implements CategoryInterface {
  @Column()
  category: string;

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  subcategories: Promise<Subcategory[]>;

  getData(): CategoryDto {
    return { id: this.id, category: this.category, subcategories: undefined };
  }

  async getSubcategories(): Promise<Subcategory[]> {
    return await this.subcategories;
  }
}
