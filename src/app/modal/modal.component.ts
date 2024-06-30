import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  opcao1: boolean = false;
  opcao2: boolean = false;
  opcao3: boolean = false;
  preco: number = 0;
  valid: boolean = true;

  @Output() listaCriada = new EventEmitter<void>();
  
  constructor(private http: HttpClient) {}

  openModal(): void {
    const modalElement = document.getElementById('modal1');
    if (modalElement) {
      modalElement.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('modal1');
    if (modalElement) {
      modalElement.style.display = 'none';
    }
  }

  validarFormulario(): boolean {
    return (this.opcao1 || this.opcao2 || this.opcao3) && this.preco > 0;
  }


  adicionarLista(): void {
    this.valid = this.validarFormulario();

    if (!this.valid) {
      return;
    }

    const total = this.preco;

    const lista = {
      opcao1: this.opcao1,
      opcao2: this.opcao2,
      opcao3: this.opcao3,
      total: total
    };

    this.http.post('http://localhost:3000/listas', lista, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(() => {
      this.listaCriada.emit();
      this.closeModal();
    });
  }
}