import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  counter:number = 0;

  ngOnInit(): void {
    //localStorage es persistente, sessionStorage no, es decir localStorage se mantiene aunque cerremos el navegador, sessionStorage no
    //this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    this.counter = sessionStorage.getItem('counter') != undefined ? parseInt(sessionStorage.getItem('counter')!) : 0;
    console.log('Creando componente CounterComponent');
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    //localStorage.setItem('counter', this.counter.toString());
  }
}
