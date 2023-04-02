import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StarsComponent } from './stars/stars.component';
import { ReplacePipe } from './replace-pipe/replace.pipe';

@NgModule({ // Decorator. Indica que a classe é um módulo
  declarations: [ // Novos componentes serão declarados aqui
    AppComponent,
    ContactsListComponent,
    StarsComponent,
    ReplacePipe 
  ],
  imports: [ // Novos módulos serão daclarados aqui
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // Nome da classe
