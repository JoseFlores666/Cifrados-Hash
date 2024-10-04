import { Component } from '@angular/core';
import bigInt from 'big-integer';

@Component({
  selector: 'app-cifradoasimetrico',
  templateUrl: './cifradoasimetrico.component.html',
  styleUrls: ['./cifradoasimetrico.component.css']
})
export class CifradoasimetricoComponent {

  // Variables para almacenar los datos de entrada
  nombre: string = '';
  direccion: string = '';
  correo: string = '';
  telefono: string = '';
  errorMensaje: string = '';

  // Resultados de cifrado y descifrado
  mensajeCifrado: string[] = [];
  mensajeDescifrado: string = '';

  // Parámetros para LUC
  p = bigInt(7); // Número primo p
  q = bigInt(11); // Número primo q
  n = this.p.multiply(this.q); // n = p * q
  lambda = bigInt.lcm(this.p.minus(1), this.q.minus(1)); // λ(n) = lcm(p-1, q-1)
  e = bigInt(7); // Clave pública
  d = this.e.modInv(this.lambda); // Clave privada (inversa modular de e mod λ(n))

  P = bigInt(1); // Parámetro P de Lucas
  Q = bigInt(1); // Parámetro Q de Lucas

  // Convertir una cadena en su representación numérica (ASCII)
  stringToAsciiArray(text: string): number[] {
    return text.split('').map(char => char.charCodeAt(0));
  }

  // Convertir un array de números ASCII en una cadena
  asciiArrayToString(asciiArray: number[]): string {
    return asciiArray.map(num => String.fromCharCode(num)).join('');
  }

  // Secuencia de Lucas
  lucasSequence(n: bigInt.BigInteger, mod: bigInt.BigInteger): bigInt.BigInteger {
    let U0 = bigInt(2);
    let U1 = this.P;
    let i = bigInt(2);

    while (i.lesserOrEquals(n)) {
      const Ui = this.P.multiply(U1).subtract(this.Q.multiply(U0)).mod(mod);
      U0 = U1;
      U1 = Ui;
      i = i.add(1);
    }
    return U1;
  }

  // Cifrar un valor numérico
  encrypt(mensaje: number): bigInt.BigInteger {
    const m = bigInt(mensaje);
    return this.lucasSequence(this.e.multiply(m), this.n);
  }

  // Desencriptar un valor numérico
  decrypt(ciphertext: bigInt.BigInteger): bigInt.BigInteger {
    return this.lucasSequence(this.d.multiply(ciphertext), this.n);
  }

  // Método para cifrar los datos ingresados
  encryptLUC() {
    const fullMessage = `${this.nombre}|${this.direccion}|${this.correo}|${this.telefono}`;

    if (!fullMessage.trim()) {
      this.errorMensaje = 'Por favor ingrese todos los campos.';
      return;
    }

    this.errorMensaje = '';
    const asciiArray = this.stringToAsciiArray(fullMessage);
    this.mensajeCifrado = asciiArray.map(num => this.encrypt(num).toString());
    this.mensajeDescifrado = ''; // Limpiar mensaje descifrado
  }

  // Método para descifrar los datos
  decryptLUC() {
    if (!this.mensajeCifrado.length) {
      this.errorMensaje = 'No hay datos cifrados para descifrar.';
      return;
    }

    this.errorMensaje = '';
    const decryptedAsciiArray = this.mensajeCifrado.map(cifrado => {
      return parseInt(this.decrypt(bigInt(cifrado)).toString(), 10);
    });
    this.mensajeDescifrado = this.asciiArrayToString(decryptedAsciiArray);
  }

  // Copiar el texto cifrado al portapapeles
  copiarAlPortapapeles() {
    const textoCifrado = this.mensajeCifrado.join(', ');
    navigator.clipboard.writeText(textoCifrado).then(() => {
      alert('Texto cifrado copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }
}
