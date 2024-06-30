import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarLista'
})
export class ListaPipe implements PipeTransform {

  transform(lista: any): string {
    if (!lista) {
      return '';
    }

    let result = '';
    if (lista.opcao1) {
      result += 'Bebidas;\n';
    }
    if (lista.opcao2) {
      result += 'Carnes;\n';
    }
    if (lista.opcao3) {
      result += 'Extras;\n';
    }
    result += `Total: R$${lista.total}`;

    return result;
  }
}
