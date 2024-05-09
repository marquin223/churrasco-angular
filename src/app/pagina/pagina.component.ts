import { Component } from '@angular/core';
import { ImprimirComponent } from '../imprimir/imprimir.component';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [ImprimirComponent, RouterModule, NgFor],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {
  nome = 'marcos';
  hide = true
  parametro=['teste-de-parametro']
  
  onNome(event: boolean) {
    this.hide = event
  }
}
