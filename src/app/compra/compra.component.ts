import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ok: boolean = false;
  submit: boolean = false;

  formularioCompra = this.fb.group({
    nombre: ['', [ Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    mail: ['', [Validators.required, Validators.email]],
    calle: ['', [Validators.required, Validators.minLength(3)]],
    numero: ['', [Validators.required]],
    ciudad: ['', [Validators.required, Validators.minLength(3)]]
  });
  
  ngOnInit(): void {
  }

  submitCompra() {
    this.ok = true;
    this.submit = true;
      this.ok = this.ok && !this.cNombre?.errors;
      this.ok = this.ok && !this.cApellido?.errors;
      this.ok = this.ok && !this.cMail?.errors;
      this.ok = this.ok && !this.cCalle?.errors;
      this.ok = this.ok && !this.cNumero?.errors;
      this.ok = this.ok && !this.cCiudad?.errors;

  }

  get cNombre() {
    return this.formularioCompra?.get('nombre');
  }

  get cApellido() {
    return this.formularioCompra?.get('apellido');
  }

  get cMail() {
    return this.formularioCompra?.get('mail');
  }

  get cTelefono() {
    return this.formularioCompra?.get('telefono');
  }

  get cCalle() {
    return this.formularioCompra?.get('calle');
  }

  get cNumero() {
    return this.formularioCompra?.get('numero');
  }

  get cCiudad() {
    return this.formularioCompra?.get('ciudad');
  }
}
