import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import{PessoaComponent}from './pages/pessoa/pessoa.component';
import{GrupoComponent} from "./pages/grupo/grupo.component";
import {LancamentoComponent} from "./pages/lancamento/lancamento.component";
import {MetaComponent} from "./pages/meta/meta.component";

export const routes: Routes = [
  //Rota Home
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //Rota Pessoa
  {path: '', redirectTo: '/pessoa', pathMatch: 'full'},
  {path: 'pessoa', component: PessoaComponent},
  // Rota Grupo
  {path: '', redirectTo: '/grupo', pathMatch: 'full'},
  {path: 'grupo', component: GrupoComponent},
  // Rota Lançamento
  {path: '', redirectTo: '/lancamento', pathMatch: 'full'},
  {path: 'lancamento', component: LancamentoComponent},
  // Rota Meta
  {path: '', redirectTo: '/meta', pathMatch: 'full'},
  {path: 'meta', component: MetaComponent}
];
