import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  listas: any[] = [];
  
  

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.carregarListas();
  }

  carregarListas(): void {
    this.http.get<any[]>('http://localhost:3000/listas')
      .subscribe(data => {
        this.listas = data;
      });
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