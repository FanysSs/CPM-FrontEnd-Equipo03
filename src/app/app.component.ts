import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vistaActual: string = '';  // Esta variable controlará la vista activa
  mostrarMenu: boolean = false;  // Esta variable controla si el menú está visible

  // Función que recibe el nombre de la vista y actualiza la vista actual
  mostrarVista(vista: string): void {
    this.vistaActual = vista;
    this.mostrarMenu = false;  // Ocultamos el menú después de seleccionar una opción
  }
}
