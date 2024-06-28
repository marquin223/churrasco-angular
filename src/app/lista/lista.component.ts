import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  listas: any[] = [];

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listas = JSON.parse(localStorage.getItem('listas') || '[]');
  }

  openModal(): void {
    this.modalComponent.openModal();
  }

  onListaCriada(): void {
    this.listas = JSON.parse(localStorage.getItem('listas') || '[]');
  }

  Calculadora(index: number): void {
    this.router.navigate(['/calculadora', index]);
  }

}