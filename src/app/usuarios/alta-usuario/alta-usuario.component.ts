import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../../models/Usuarios';
import { UsuariosService } from '../../services/usuarios.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss'],
})
export class AltaUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  editando = false;
  idUsuario: number;
  usuario$: Observable<Usuarios>;
  usuario: Usuarios;

  constructor(
    // private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private _usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idUsuario = params['id'];
    });
    if (this.idUsuario) {
      this.usuario$ = this._usuariosService.obtenerUsuarioPorID(this.idUsuario);
      this.usuario$.subscribe((user) => {
        this.usuario = user;
        this.editarUsuario(this.usuario);
      });
    } else {
      this.limpiarCampos();
    }
  }

  crearUsuario() {
    var formNombreUsuario = this.usuarioForm.get('nombreUsuario').value;
    this._usuariosService
      .obtenerUsuarioPorNombreUsuario(formNombreUsuario)
      .subscribe((usuario) => {
        if (!usuario) {
          // si no hay un usuario con ese nombre de usuario, creo un nuevo usuario
          const usuario: Usuarios = {
            nombre: this.usuarioForm.get('nombre').value,
            apellido: this.usuarioForm.get('apellido').value,
            nombreUsuario: formNombreUsuario,
          };
          //console.log(usuario);
          this._usuariosService.create(usuario).subscribe((data) => {
            console.log(data);
            // this.obtenerUsuarios();
            // this.toast.success("Usuario agregado");
          });
          this.limpiarCampos();
        } else {
          // this.toast.warning("Ya existe el nombre de usuario");
        }
      });
  }

  editarUsuario(us: Usuarios) {
    this.editando = true;
    this.idUsuario = us.id;
    this.usuarioForm = this.fb.group({
      nombre: [us.nombre, Validators.required],
      apellido: [us.apellido, Validators.required],
      nombreUsuario: [us.nombreUsuario, Validators.required],
    });
  }

  actualizarUsuario() {
    var formNombreUsuario = this.usuarioForm.get('nombreUsuario').value;
    this._usuariosService
      .obtenerUsuarioPorNombreUsuario(formNombreUsuario)
      .subscribe((usuario) => {
        // si no hay un usuario con ese nombre de usuario
        // o el nombre de usuario no se cambia, actualizo el usuario
        if (!usuario || (usuario && usuario.id == this.idUsuario)) {
          const usuario: Usuarios = {
            id: this.idUsuario,
            nombre: this.usuarioForm.get('nombre').value,
            apellido: this.usuarioForm.get('apellido').value,
            nombreUsuario: this.usuarioForm.get('nombreUsuario').value,
          };
          console.log(usuario);
          this._usuariosService.create(usuario).subscribe((data) => {
            console.log(data);
            // this.obtenerUsuarios();
            // this.toast.success("Usuario actualizado");
          });
          this.limpiarCampos();
        } else {
          // this.toast.warning("Ya existe el nombre de usuario");
        }
      });
  }

  limpiarCampos() {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
    });
    this.editando = false;
  }

  cancelar() {
    this.router.navigate(['../lista-usuarios'], {
      relativeTo: this.route,
    });
  }
}
