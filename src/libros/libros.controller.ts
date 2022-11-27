import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CrearLibroDto } from './dto/crear-libros.dto';
import { libro, Libro } from './interfaces/libros.interface';

@Controller('libros')
export class LibrosController {

  constructor(private librosService: LibrosService) {}

  @Get()
  buscarLibros(): Libro[] {
    return this.librosService.listarTodo();
  }

  @Get(':id')
  infoLibro(@Param('id') id: string): Libro {
    return this.librosService.infoLibro(parseInt(id));
  }

  @Post()
  crearLibro(@Body() infoLibro: CrearLibroDto): void {
    this.librosService.crearLibro(infoLibro);
  }

  @Put(':id')
  editarLibro(@Param('id') id: string, @Body() actualizarLibro: Libro): void {
    this.librosService.editarlibro(parseInt(id), actualizarLibro);
  }

  @Delete(':id')
  eliminarLibro(@Param('id') id: string): void {
    this.librosService.eliminarlibro(parseInt(id));
  }
}
