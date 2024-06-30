import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViacepService } from './viacep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formC = {
    nome: '',
    email: '',
    senha: '',
    cep: ''
  };

  endereco: any = null;
  constructor(
    private storageService: StorageService, private router: Router, private http: HttpClient, private viacepService: ViacepService
  ) {}

  ngOnInit() {
    const saveformC = this.storageService.getformC();
    if (saveformC) {
      this.formC = saveformC;
    }
  }

  buscarEndereco() {
    if (this.formC.cep) {
      this.viacepService.buscarEndereco(this.formC.cep).subscribe({
        next: (data: any) => {
          if (!data.erro) {
            this.endereco = data;
          } else {
            this.endereco = null;
            alert('CEP não encontrado.');
          }
        },
        error: (error) => {
          console.error('Erro ao buscar endereço:', error);
          this.endereco = null;
          alert('Erro ao buscar endereço.');
        }
      });
    }
  }

  submitForm() {
    console.log('Formulário enviado com sucesso!', this.formC);
    
    this.storageService.saveformC(this.formC);
    
    this.http.post('http://localhost:3000/cadastros', this.formC).subscribe({
      next: (response) => {
        console.log('Cadastro salvo no JSON Server com sucesso:', response);
        this.router.navigate(['/lista']);
      },
      error: (error) => {
        console.error('Erro ao salvar cadastro no JSON Server:', error);
      }
    });
  }
}