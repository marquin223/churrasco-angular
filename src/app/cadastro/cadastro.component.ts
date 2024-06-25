import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

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

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    const saveformC = this.storageService.getformC();
    if (saveformC) {
      this.formC = saveformC;
    }
  }

  submitForm() {
    console.log('Formulário enviado com sucesso!', this.formC);
    
    this.storageService.saveformC(this.formC);
    this.router.navigate(['/cadastrado']);

  }
}
