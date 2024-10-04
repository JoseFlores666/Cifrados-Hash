import { Component } from '@angular/core';

@Component({
  selector: 'app-cifrado-escitala',
  templateUrl: './cifrado-escitala.component.html',
  styleUrls: ['./cifrado-escitala.component.css']
})
export class CifradoEscitalaComponent {
  mensaje: string = '';
  clave: number | null = null;
  resultado: string = '';
  errorMensaje: string = '';
  errorClave: string = '';

  cifrar(mensaje: string, columnas: number): string {
    let mensajeCifrado = '';
    const filas = Math.ceil(mensaje.length / columnas);

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        const indice = fila * columnas + col;
        if (indice < mensaje.length) {
          mensajeCifrado += mensaje[indice];
        }
      }
    }
    
    return mensajeCifrado;
  }

  descifrar(mensaje: string, columnas: number): string {
    const filas = Math.ceil(mensaje.length / columnas);
    let mensajeDescifrado = Array(mensaje.length).fill('');
    let indice = 0;

    for (let col = 0; col < columnas; col++) {
      for (let fila = 0; fila < filas; fila++) {
        if (indice < mensaje.length) {
          const idx = fila * columnas + col;
          mensajeDescifrado[idx] = mensaje[indice];
          indice++;
        }
      }
    }
    
    return mensajeDescifrado.join('');
  }

  handleCifrar(): void {
    console.log('Valor de clave:', this.clave);
    let hasError = false;
  
    if (!this.mensaje.trim()) {
      this.errorMensaje = "El mensaje es requerido.";
      hasError = true;
    } else {
      this.errorMensaje = '';
    }

    if (this.clave === null || isNaN(this.clave) || this.clave <= 0) {
      this.errorClave = "Ingresa una clave válida (número de columnas).";
      hasError = true;
    } else {
      this.errorClave = '';
    }

    if (hasError) return;

    const mensajeCifrado = this.cifrar(this.mensaje.replace(/\s/g, ''), this.clave ?? 0);
    this.resultado = mensajeCifrado;

    this.mensaje = '';
    this.clave = null;
  }

  handleDescifrar(): void {
    let hasError = false;

    if (!this.mensaje.trim()) {
      this.errorMensaje = "El mensaje es requerido.";
      hasError = true;
    } else {
      this.errorMensaje = '';
    }

    if (this.clave === null || isNaN(this.clave) || this.clave <= 0) {
      this.errorClave = "Ingresa una clave válida (número de columnas).";
      hasError = true;
    } else {
      this.errorClave = '';
    }

    if (hasError) return;

    const mensajeDescifrado = this.descifrar(this.mensaje.replace(/\s/g, ''), this.clave ?? 0); // Usar 0 si clave es null
    this.resultado = mensajeDescifrado;

    this.mensaje = '';
    this.clave = null;
  }

  copiarAlPortapapeles(): void {
    navigator.clipboard.writeText(this.resultado)
      .then(() => alert('Texto copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar: ', err));
  }
}
