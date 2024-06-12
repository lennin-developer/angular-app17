import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title: string = 'Hola Mundo Angular';
  users: string[] = ['Mishel', 'Lennin', 'Pilar'];
  subtitle: string = 'Contador con estado de sesion';

  visible: boolean = false;
  counter: number = 0;

  ngOnInit(): void {
    //localStorage es persistente, sessionStorage no, es decir localStorage se mantiene aunque cerremos el navegador, sessionStorage no
    //this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    this.counter =
      sessionStorage.getItem('counter') != undefined
        ? parseInt(sessionStorage.getItem('counter')!)
        : 0;
    console.log('Creando componente AppComponent');
  }

  setVisible(): void {
    this.visible = this.visible ? false : true;
    console.log('Hemos hecho click en el setVisible');
  }

  setCounter(counter: number): void {
    this.counter = counter;
    console.log('Hemos hecho click en el setCounter');
  }
}
