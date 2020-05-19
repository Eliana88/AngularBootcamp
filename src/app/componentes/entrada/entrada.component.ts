import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  mensaje: string = 'Soy un mensaje!';

  valor1 : number = 134;
  valor2 : number = 235;
  valor3 : number = 345;
  valor4 : number = 678;

  contador: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  modificar(e){
    let dato = e.target.value;
    console.log('dato:', dato);
    this.valor3= dato;
  }

}
