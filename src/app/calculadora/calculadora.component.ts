import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  lista: any;
  numeroDePessoas: number = 1;
  resultado: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    const listas = JSON.parse(localStorage.getItem('listas') || '[]');
    this.lista = listas[parseInt(index!, 10)];
  }

  calcular(): void {
    if (this.numeroDePessoas > 0) {
      this.resultado = this.lista.total / this.numeroDePessoas;
    }
  }
}

