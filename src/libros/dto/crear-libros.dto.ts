import {
  IsString,
  IsNumber,
  IsPositive,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CrearLibroDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(1200)
  @IsNotEmpty()
  pags: number;
}
