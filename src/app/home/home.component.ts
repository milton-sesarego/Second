import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/Usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsuariosService],
})
export class HomeComponent implements OnInit {
  idUsuario: number;

  constructor(
    // private toast: ToastrService,
    private _usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {}
}
