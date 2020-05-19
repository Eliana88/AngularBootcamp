import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})


export class EstructuraComponent implements OnInit {

  mostrar : boolean = true;

  mostrar2 : boolean = false;

  //personas: string[] = [
    personas: Array<String> = [
    'Lucas', 
    'Pedro', 
    'María', 
    'Ana',
    'Mariano'
  ];

  alumnos : Array<object> = [
    {nombre: 'Juan', apellido: 'Lopez', edad: 23, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'},
    {nombre: 'Eliana', apellido: 'Ramos', edad: 32, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'},
    {nombre: 'Carlos', apellido: 'Rodriguez', edad: 20, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-512.png'},
    {nombre: 'Lucía', apellido: 'Mei', edad: 23, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'}
  ]


  constructor() { }

  ngOnInit(): void {

    console.log(this.mostrar2?'ngOnInit EstructuraComponent(1)': 'ngOnInit EstructuraComponent(2)');

/*     let mensaje;

    if(this.mostrar2){
      mensaje = 'ngOnInit EstructuraComponent(1)'
    }
    else{
      mensaje = 'ngOnInit EstructuraComponent(2)'
    }

    console.log(mensaje); */

  }

  getAlumnoAlt(nombre:string): string{
    return 'Foto de ' + nombre;
  }

  eliminar(index:number):void {
    console.log(index);
    this.alumnos.splice(index, 1);//1 es cuantos elementos quiero eliminar.

  }

  agregar(){
    let alumno = {
      nombre: 'Diego', apellido: 'Guzmán', edad: 30, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'};

    this.alumnos.push(alumno);
  }


}
