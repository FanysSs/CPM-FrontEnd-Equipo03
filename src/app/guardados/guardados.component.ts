import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../actividad.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-proyectos-guardados',
  templateUrl: './guardados.component.component.html',
  styleUrls: ['./guardados.component.component.css']
})

export class ProyectosGuardadosComponent implements OnInit {
  proyectosGuardados: any[] = [];  // Aquí almacenaremos los proyectos obtenidos
  actividadesGuardadas: any[] = [];  // Aquí almacenaremos las actividades obtenidas
  proyectoSeleccionado: any = null;  // Para almacenar el proyecto seleccionado
  errorMessage: string = '';  // Para manejar mensajes de error

  constructor(private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.obtenerProyectosGuardados();
  }

  // Obtener los proyectos guardados
  obtenerProyectosGuardados(): void {
    this.actividadService.obtenerProyectos().subscribe(
      (data) => {
        this.proyectosGuardados = data;  // Asigna los datos a la propiedad proyectosGuardados
        console.log('Proyectos guardados:', this.proyectosGuardados);
      },
      (error) => {
        this.errorMessage = 'Hubo un error al obtener los proyectos guardados: ' + error.message;
        console.error(this.errorMessage);
      }
    );
  }

  // Obtener las actividades de un proyecto seleccionado
  obtenerActividadesPorProyecto(proyectoId: number): void {
    this.actividadService.obtenerActividadesPorProyecto(proyectoId).subscribe(
      (data) => {
        this.actividadesGuardadas = data;  // Asigna las actividades del proyecto seleccionado
        console.log('Actividades del proyecto seleccionado:', this.actividadesGuardadas);
      },
      (error) => {
        this.errorMessage = 'Hubo un error al obtener las actividades del proyecto: ' + error.message;
        console.error(this.errorMessage);
      }
    );
  }

  // Manejar el proyecto seleccionado
  onProyectoSeleccionado(proyectoId: number): void {
    this.proyectoSeleccionado = this.proyectosGuardados.find(proyecto => proyecto.id === proyectoId);
    this.obtenerActividadesPorProyecto(proyectoId);  // Llamar al servicio para obtener actividades
  }
}
