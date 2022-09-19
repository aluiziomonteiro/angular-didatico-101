import { Component } from '@angular/core';

@Component({                // <-- Decorator que indica que a classe é um componente
  selector: 'app-root',     // <-- Nome usado para invocar este componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // <-- Nome da classe
  title = 'spa-contacts';
  salute = 'Welcome';
}
