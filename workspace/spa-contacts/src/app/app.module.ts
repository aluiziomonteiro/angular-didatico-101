import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({ // Decorator. Indica que a classe é um módulo
  declarations: [ // Novos componentes serão declarados aqui
    AppComponent 
  ],
  imports: [ // Novos módulos serão daclarados aqui
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Nome da classe
