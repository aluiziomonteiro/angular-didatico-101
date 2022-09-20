import { Component, OnInit } from "@angular/core";
import { ContactsModel } from "./contacts.model";
import { ContactsService } from "./contacts.service";

@Component({
    // selector: 'app-contacts-list',
    templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
    filteredContacts: ContactsModel[] = [];
    _contacts: ContactsModel[] = [];
    _filter: string;         // <-- Variável que será usada para armazenar o valor do input

    constructor(private contactsService: ContactsService) { }

    ngOnInit(): void {
        this._contacts = this.contactsService.returnAll();
        this.filteredContacts = this._contacts;     // <-- Recebe um contato filtrado
    }

   
    set filter(value:string){
        this._filter = value;        // <-- Recebe o valor do input

        // Abaixo, filteredContacts recebe a lista filtrada com base no valor do input
        this.filteredContacts = this._contacts.filter((contact:ContactsModel) => 
        contact.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
    }

    get filter(): string {
        return this._filter;
    }
}