import { Component } from '@angular/core';

@Component({ // Indica que a classe é um componente
  selector: 'app-root', // Usado para invocar o componente
  templateUrl: './app.component.html', // Caminho do template
  styleUrls: ['./app.component.css'] // Caminho do css
})
export class AppComponent { // Nome da classe
  title = 'spa-contacts';
}
