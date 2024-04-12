import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutrocomponenteComponent } from './outrocomponente/outrocomponente.component';
import { ComponentesemtesteComponent } from './componentesemteste/componentesemteste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OutrocomponenteComponent, ComponentesemtesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'churrasco-angular';
}
