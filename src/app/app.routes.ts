import { Routes, RouterModule } from '@angular/router';

import { PaginaComponent } from './pagina/pagina.component';
import { OutraPaginaComponent } from './outra-pagina/outra-pagina.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: PaginaComponent},
    {path: 'outra', component: OutraPaginaComponent}
];

NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRouting {}