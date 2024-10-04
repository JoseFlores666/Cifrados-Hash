import { Component } from '@angular/core';

@Component({
  selector: 'app-cifrado-cesar',
  templateUrl: './cifrado-cesar.component.html',
  styleUrls: ['./cifrado-cesar.component.css'] // Asegúrate de incluir tu CSS
})
export class CifradoCesarComponent {
  mensaje: string = '';
  clave: string = '';
  resultado: string = '';
  errorMensaje: string = '';
  errorClave: string = '';

  handleCifrar(): void {
    let hasError = false;
    if (!this.mensaje.trim()) {
      this.errorMensaje = "El mensaje es requerido";
      hasError = true;
    } else {
      this.errorMensaje = '';
    }

    if (!this.clave.trim()) {
      this.errorClave = "La clave es requerida";
      hasError = true;
    } else {
      this.errorClave = '';
    }

    if (hasError) return;

    const mensajeCifrado = `${this.mensaje.toUpperCase()}`;
    this.resultado = this.cifrar(mensajeCifrado, parseInt(this.clave));
    this.mensaje = '';
    this.clave = '';
  }

  handleDescifrar(): void {
    let hasError = false;
    if (!this.mensaje.trim()) {
      this.errorMensaje = "El mensaje es requerido";
      hasError = true;
    } else {
      this.errorMensaje = '';
    }

    if (!this.clave.trim()) {
      this.errorClave = "La clave es requerida";
      hasError = true;
    } else {
      this.errorClave = '';
    }

    if (hasError) return;

    this.resultado = this.descifrar(this.resultado, parseInt(this.clave));
    this.mensaje = '';
    this.clave = '';
  }

  validarNumeros(event: KeyboardEvent): void {
    if (event.target instanceof HTMLInputElement) {
        if (event.charCode < 48 || event.charCode > 57) {
            event.preventDefault(); 
        }
    }
}

  copiarAlPortapapeles(): void {
    navigator.clipboard.writeText(this.resultado)
      .then(() => alert('Texto copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar: ', err));
  }

  cifrar(mensaje: string, clave: number): string {
    let resultado = '';
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    clave = ((clave % 26) + 26) % 26; // Asegurarse de que la clave esté dentro del rango

    for (let i = 0; i < mensaje.length; i++) {
      if (alfabeto.indexOf(mensaje[i]) !== -1) {
        const posicion = (alfabeto.indexOf(mensaje[i]) + clave) % 26;
        resultado += alfabeto[posicion];
      } else {
        resultado += mensaje[i];
      }
    }
    return resultado;
  }

  descifrar(mensaje: string, clave: number): string {
    let resultado = '';
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    clave = ((clave % 26) - 26) % 26; // Asegurarse de que la clave esté dentro del rango

    for (let i = 0; i < mensaje.length; i++) {
      if (alfabeto.indexOf(mensaje[i]) !== -1) {
        const posicion = (alfabeto.indexOf(mensaje[i]) - clave + 26) % 26; // Asegurarse de que la posición sea positiva
        resultado += alfabeto[posicion];
      } else {
        resultado += mensaje[i];
      }
    }
    return resultado;
  }
}