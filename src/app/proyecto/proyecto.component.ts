import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyecto: any = {
    nombre: '',
    descripcion: ''
  };
  errorMessage: string = ''; // Para manejar mensajes de error
  successMessage: string = ''; // Para manejar mensajes de éxito

  constructor(private ActividadService: ActividadService, private router: Router) {}

  // Función para guardar un nuevo proyecto
  guardarProyecto(): void {
    this.ActividadService.crearProyecto(this.proyecto).subscribe(
      (data) => {
        this.successMessage = 'Proyecto guardado exitosamente!';
        this.errorMessage = ''; // Limpiar cualquier mensaje de error
        this.proyecto = { nombre: '', descripcion: '' }; // Limpiar formulario
        console.log('Proyecto guardado:', data);
      },
      (error) => {
        this.errorMessage = 'Hubo un error al guardar el proyecto: ' + error.message;
        this.successMessage = ''; // Limpiar mensaje de éxito
        console.error(this.errorMessage);
      }
    );
  }
}