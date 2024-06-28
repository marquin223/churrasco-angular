import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-criar-lista',
  templateUrl: './criar-lista.component.html',
  styleUrl: './criar-lista.component.css'
})
export class CriarListaComponent {
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  openModal(): void {
    this.modalComponent.openModal();
  }

  onListaCriada(): void {
    // Função pode ser deixada vazia ou adicionar lógica se necessário
  }
}