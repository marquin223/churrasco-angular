import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor() { }

  saveformC(formC: any): void {
    localStorage.setItem('formC', JSON.stringify(formC));
  }

  getformC(): any {
    const formC = localStorage.getItem('formC');
    return formC ? JSON.parse(formC) : null;
  }
}