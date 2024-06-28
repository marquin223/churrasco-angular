import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private listas: string[] = [];

  constructor() { }

  getListas(): string[] {
    return this.listas;
  }

  addLista(lista: string): void {
    this.listas.push(lista);
  }
}