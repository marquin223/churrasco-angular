import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveformC(formC: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('usuarios', JSON.stringify(formC));
    } else {
      console.error('LocalStorage não está disponível neste ambiente.');
    }
  }

  getformC(): any {
    if (typeof localStorage !== 'undefined') {
      const saveformC = localStorage.getItem('usuarios');
      return saveformC ? JSON.parse(saveformC) : null;
    } else {
      console.error('LocalStorage não está disponível neste ambiente.');
      return null;
    }
  }

  clearformC() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuarios');
    } else {
      console.error('LocalStorage não está disponível neste ambiente.');
    }
  }
}