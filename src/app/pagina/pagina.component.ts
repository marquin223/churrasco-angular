import { Component } from '@angular/core';
import { ImprimirComponent } from '../imprimir/imprimir.component';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [ImprimirComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {
  nome = 'marcos';
  hide = true
  
  onNome(event: boolean) {
    this.hide = event
  }
}
