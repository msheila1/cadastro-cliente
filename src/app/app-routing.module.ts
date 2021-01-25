import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarClientesComponent } from './components/buscar-clientes/buscar-clientes.component';
import { CadastrarClientesComponent } from './components/cadastrar-clientes/cadastrar-clientes.component';
import { EditarClientesComponent } from './components/editar-clientes/editar-clientes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscar-de-clientes',
    pathMatch: 'full'
  },
  {
    path: 'buscar-de-clientes',
    component: BuscarClientesComponent,
  },
  {
    path: 'cadastro-de-clientes',
    component: CadastrarClientesComponent,
  },
  {
    path: 'atualizacao-cadastral/:id',
    component: EditarClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
