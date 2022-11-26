import {Controller, Get, Post, Param, Body, Put, Delete} from '@nestjs/common';
import { CrearLibroDto } from './dto/crear-libros.dto';


@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros(){
        return 'Aqui se listara todos los libros'
    }

    @Get(':id')
    infoLibro(@Param ('id') id:number):string {
        return `esta es la informacion del libro #${id}`;

    }

    @Post()
    crearLibro(@Body() infoLibro: CrearLibroDto):string {
       return `un nuevo libro ha sido creado. Este libro tiene ${infoLibro.pags} paginas.`;
    }

    @Put(':id')
    editarLibro(@Param('id')id: number, @Body() ActualizarLibro: CrearLibroDto): string {
        return `el libro de id #${id} se ha actualizado`;
    }

    @Delete(':id')
    eliminarLiro(@Param('id') id: number):string {
        return `el libro de id #${id} se ha eliminado`;
    }

}
