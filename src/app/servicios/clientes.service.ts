import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes : string [] = [
    'Juan', 
    'Ana',
    'Pedro', 
    'María',
    'Pablo'
  ]

  constructor() { }

  getClientes(){
    return this.clientes;
  }

  AgregarClientes(client){
     this.clientes.push(client);
  }

  BorrarClientes(){
    this.clientes.pop();
  }


}
