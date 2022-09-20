import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { StarsComponent } from './stars/stars.component';
import { ReplacePipe } from './replace-pipe/replace.pipe';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactsInfoComponent } from './contacts/contacts-info.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    StarsComponent,
    ReplacePipe,
    Error404Component,
    NavBarComponent,
    ContactsInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'contacts', pathMatch: 'full'
      },
      {
        path: 'contacts', component: ContactsListComponent
      },
      {
        path: 'contacts/info/:id', component: ContactsInfoComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
