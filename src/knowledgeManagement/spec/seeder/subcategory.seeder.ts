import { BaseSeeder } from '@BaseObject';
import { Subcategory as SubcategoryInterface } from '../../modules/subcategory/subcategory.interface';
import { CategorySeeder } from './category.seeder';

export class SubcategorySeeder extends BaseSeeder<SubcategoryInterface> {
  getData(): SubcategoryInterface[] {
    const categorySeeder = new CategorySeeder();
    const category = categorySeeder.getData()[0];

    const subcategories: SubcategoryInterface[] = [
      {
        id: 'Subcategory-0',
        subcategory: '2B-KMUTT',
        category,
      },
      {
        id: 'Subcategory-1',
        subcategory: 'Petch Prajohm',
        category,
      },
      {
        id: 'Subcategory-2',
        subcategory: 'Admission Recruitment',
        category,
      },
    ];
    return subcategories;
  }
}
