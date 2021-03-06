import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FAQ as FAQInterface } from 'knowledgeManagement/modules/faq/faq.interface';
import { CategoryDto } from '../../category/dto/category.dto';
import { SubcategoryDto } from '../../subcategory/dto/subcategory.dto';
import { UserDto } from '../../user/dto/user.dto';

@ObjectType()
export class FAQDto implements FAQInterface {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;

  @Field(() => SubcategoryDto)
  subcategory: SubcategoryDto;

  @Field(() => CategoryDto)
  category: CategoryDto;

  @Field(() => UserDto)
  lastEditor: UserDto;

  @Field(() => Date)
  updatedDate: Date;
}
