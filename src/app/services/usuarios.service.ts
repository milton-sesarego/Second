import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Usuarios } from "../models/Usuarios";

@Injectable()
export class UsuariosService extends BaseService {
  obtenerUsuarios() {
    return this.get("ObtenerUsuarios");
  }

  obtenerUsuarioPorID(id: number) {
    return this.get("Usuario/" + id);
  }

  create(user: Usuarios) {
    return this.post("CrearUsuario", user);
  }

  eliminarUsuario(id: number) {
    return this.delete(`EliminarUsuario/${id}`);
  }

  obtenerUsuarioPorNombreUsuario(nombreUsuario: string){
    return this.get(`ObtenerUsuarioPorNombreUsuario/${nombreUsuario}`);
  }
}
