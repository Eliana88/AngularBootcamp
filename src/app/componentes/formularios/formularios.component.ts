import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre : '',
    apellido : '',
    edad : '',
    email : '',
    password : ''
  }


  minimaCantidadCaracteresNombre : number = 3
  maximaCantidadCaracteresNombre : number = 12

  f : FormGroup
  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minimaCantidadCaracteresNombre),
        Validators.maxLength(this.maximaCantidadCaracteresNombre)
      ])],
      apellido : '',
      edad : '',
      contacto: fb.group({
        email : '',
        telefono: ''
      }),
      password : ''
    })
  }

  ngOnInit(): void {
  }

  enviar(loginForm) {
    console.log(this.formu)

    this.formu = {
      nombre : '',
      apellido : '',
      edad : '',
      email : '',
      password : ''
    }

    loginForm.form.reset()
  }


  enviar_rf() {
    console.log(this.f.value)
    this.f.reset()
  }

}