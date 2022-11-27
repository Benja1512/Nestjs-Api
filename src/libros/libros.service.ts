import { Injectable } from '@nestjs/common';
import { Libro, libro } from './interfaces/libros.interface';

@Injectable()
export class LibrosService {
  private readonly libro: libro[] = [];

  private findId(id: number): number {
    let indice: number;
    this.libro.forEach(function (libro: Libro, index: number) {
      if (libro.libro_id === id) {
        indice = index;
        console.log(indice);
      }
    });
    return indice;
  }

  private lastId: number;
  crearLibro(infoLibro) {
    let lastId: number;
    function addId(matrixLibros): number {
      if (matrixLibros.length > 0) {
        lastId = matrixLibros[matrixLibros.length - 1].libro_id + 1;
        return (lastId = 1);
      } else {
        return (lastId = 1);
      }
    }
    const nuevoLibro = {
      libro_id: addId(this.libro),
      ...infoLibro,
    };
    this.libro.push(nuevoLibro);
  }

  listarTodo(): Libro[] {
    return this.libro;
  }

  infoLibro(id: number): Libro {
    return this.libro[this.findId(id)];
  }

  editarlibro(id: number, infoLibro): Libro {
    const indice = this.findId(id);
    this.libro.splice(indice, 1, infoLibro);
    return this.libro[indice];
  }

  eliminarlibro(id: number) {
    const indice = this.findId(id);
    this.libro.splice(indice, 1);
  }
}
