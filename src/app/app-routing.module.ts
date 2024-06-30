import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'lista', component: ListaComponent},
  { path: 'calculadora/:id', component: CalculadoraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
