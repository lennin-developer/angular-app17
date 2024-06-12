import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], //CommonModule es requerido cuando en nuestro html usamos las direvtivas ngIf, ngFor, etc
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Hola Mundo Angular';
  users: string[] = ['Mishel', 'Lennin', 'Pilar'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en el setVisible');
  }
}
