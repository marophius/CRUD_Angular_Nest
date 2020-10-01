import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioFormComponent } from './components/funcionario-form/funcionario-form.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { HomeComponent } from './components/home/home.component';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'cadastrarFuncionarios', component: FuncionarioFormComponent },
  { path: 'editarFuncionarios/:id', component: FuncionarioFormComponent },
  { path: 'cliente', component: ClienteListComponent},
  { path: 'editarClientes/:id', component: ClienteFormComponent},
  { path: 'cadastrarClientes', component: ClienteFormComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
