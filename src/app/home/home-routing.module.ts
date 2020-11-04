import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from '../usuarios/lista-usuarios/lista-usuarios.component';
import { AltaUsuarioComponent } from '../usuarios/alta-usuario/alta-usuario.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: HomeComponent,
    children: [
      {
        path: 'lista-usuarios',
        component: ListaUsuariosComponent,
        pathMatch: 'full',
      },
      {
        path: 'alta-usuarios',
        component: AltaUsuarioComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
