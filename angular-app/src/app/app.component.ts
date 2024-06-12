import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, RouterOutlet], //CommonModule es requerido cuando en nuestro html usamos las direvtivas ngIf, ngFor, etc
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hola Mundo Angular';
  users: string[] = ['Mishel', 'Lennin', 'Pilar'];
  subtitle: string = 'Contador con estado de sesion';

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en el setVisible');
  }
}
