import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [CommonModule, ReactiveFormsModule]

})
export class EmpleadosComponent {
  employeeForm: FormGroup;
  Empleados: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      matricula: [null, Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      edad: [null, Validators.required],
      horasTraba: [null, Validators.required]
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      this.Empleados.push(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }

  updateEmployee(employee: any) {
    this.employeeForm.patchValue(employee);
  }

  deleteEmployee(matricula: number) {
    this.Empleados = this.Empleados.filter(e => e.matricula !== matricula);
  }

  printEmployees() {
    console.log(this.Empleados);
  }
}