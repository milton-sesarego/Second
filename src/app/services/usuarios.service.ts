import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Usuarios } from '../models/Usuarios';
import { of } from 'rxjs';

@Injectable()
export class UsuariosService extends BaseService {
  obtenerUsuarios() {
    // return this.get("ObtenerUsuarios");
    var m: Usuarios = {
      id: 249,
      nombre: 'milton',
      apellido: 'sesarego',
      nombreUsuario: 'mlt',
    };
    return of([m]);
  }

  obtenerUsuarioPorID(id: number) {
    // return this.get('Usuario/' + id);
    var m: Usuarios = {
      id: 249,
      nombre: 'milton',
      apellido: 'sesarego',
      nombreUsuario: 'mlt',
    };
    return of(m);
  }

  create(user: Usuarios) {
    return this.post('CrearUsuario', user);
  }

  eliminarUsuario(id: number) {
    return this.delete(`EliminarUsuario/${id}`);
  }

  obtenerUsuarioPorNombreUsuario(nombreUsuario: string) {
    return this.get(`ObtenerUsuarioPorNombreUsuario/${nombreUsuario}`);
  }
}
