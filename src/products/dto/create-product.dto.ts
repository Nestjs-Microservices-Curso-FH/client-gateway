import { Type } from 'class-transformer';
import { IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'El nombre del producto es requerido' })
  public name: string;

  @IsNumber({ maxDecimalPlaces: 4 })
  @Min(0, { message: 'El valor minio es cero (0)' })
  @Type(() => Number)
  public price: number;
}
