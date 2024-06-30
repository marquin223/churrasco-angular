import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formC = {
    nome: '',
    email: '',
    senha: ''
  };

  constructor(
    private storageService: StorageService, private router: Router, private http: HttpClient
  ) {}

  ngOnInit() {
    const saveformC = this.storageService.getformC();
    if (saveformC) {
      this.formC = saveformC;
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