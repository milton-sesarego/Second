import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/Usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuarios[];
  idUsuario: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this._usuariosService.obtenerUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }
  eliminarUsuario(id: number) {
    this._usuariosService.eliminarUsuario(id).subscribe((data) => {
      console.log(data);
      this.obtenerUsuarios();
      // this.toast.success("Usuario eliminado");
    });
  }

  editarUsuario(userId: Number) {
    console.log(userId);
    this.router.navigate(['../alta-usuarios'], {
      queryParams: { id: userId },
      relativeTo: this.route,
    });
  }
}
