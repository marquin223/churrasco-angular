import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  listaId: number | null = null;
  lista: any = null;
  numeroDePessoas: number = 1;
  resultado: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.listaId = Number(params.get('id'));
      const listas = JSON.parse(localStorage.getItem('listas') || '[]');
      this.lista = listas[this.listaId];
    });
  }

  calcular(): void {
    if (this.numeroDePessoas > 0 && this.lista) {
      const totalPorPessoa = this.lista.total / this.numeroDePessoas;
      this.resultado = parseFloat(totalPorPessoa.toFixed(2));
    } else {
      this.resultado = null;
    }
  }
}