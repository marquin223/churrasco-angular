import { Component, OnChanges, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imprimir',
  standalone: true,
  imports: [],
  templateUrl: './imprimir.component.html',
  styleUrl: './imprimir.component.css'
})
export class ImprimirComponent implements OnChanges, OnInit {
  @Input() value: number = 0;
  @Output() nome = new EventEmitter<boolean>();

  ngOnChanges(): void {
      if (this.value >= 2)
        this.nome.emit(false)
  }
  
  ngOnInit(): void {}
}

