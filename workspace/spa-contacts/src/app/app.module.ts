import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({               // <-- Decorator que indica que a classe é um módulo
  declarations: [         // <-- Novos componentes devem ser declarados aqui
    AppComponent              
  ],
  imports: [              // <-- Módulos necessários devem ser importados aqui
    BrowserModule,
    FormsModule           // <-- Adicionando o módulo de formulários na aplicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  // <-- Nome da classe
