import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [{
  path: 'index',
  component: IndexComponent,
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/index'
},
{
  path: 'error',
  component: ErrorComponent,
},{
  path: '**',
  redirectTo: '/error'
},
{
  path: 'seguridad',
  loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
},{
  path: 'admin',
  loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
},{
  path: 'usuario',
  loadChildren: () => import('./modulos/usuario/usuario.module').then(m => m.UsuarioModule)
},
{
  path: 'encomienda',
  loadChildren: () => import('./modulos/encomienda/encomienda.module').then(m => m.EncomiendaModule)
},
{
  path: 'servicio',
  loadChildren: () => import('./modulos/servicio/servicio.module').then(m => m.ServicioModule)
},
{
  path: 'cliente',
  loadChildren: () => import('./modulos/cliente/cliente.module').then(m => m.ClienteModule)
},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }