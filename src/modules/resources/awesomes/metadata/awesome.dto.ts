import { IsString, IsInt, IsUrl, Length } from 'class-validator';

export class CreateAwesomeDto {
  readonly title: string;
  readonly description: number;

  @IsUrl() readonly url: string;

  @Length(1, 20)
  readonly category: string;
}
