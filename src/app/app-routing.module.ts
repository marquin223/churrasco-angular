import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LogadoComponent } from './logado/logado.component';

const routes: Routes = [{path: '', component: CadastroComponent},
  {path: 'cadastrado', component: LogadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
