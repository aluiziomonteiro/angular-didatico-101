import { Component, OnInit } from "@angular/core";
import { ContactsModel } from "./contacts.model";
import { ContactsService } from "./contacts.service";

@Component({
    templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {
    filteredContacts: ContactsModel[] = [];
    _contacts: ContactsModel[] = [];
    _filter: string;

    constructor(private contactsService: ContactsService) { }

    ngOnInit(): void {
        this.returnAll();
    }

    returnAll(): void {
        this.contactsService.returnAll().subscribe({    // <-- Inscrição para receber novidades do Observable
            next: contacts => { // <-- Será executada se tudo ocorrer bem
                this._contacts = contacts;  // <-- Atribuindo a lista que chegou da requisição
                this.filteredContacts = this._contacts;
            },
            error: e => {   // <-- Será executada se acontecer erros
                console.log('Error in return list!', e);
            }
        });
    }

    delete(contactId: number): void {
        this.contactsService.delete(contactId).subscribe({
            next: () => {
                console.log('Deleted successfully!');
                this.returnAll();
            },
            error: e => console.log('Error in delete method!', e)
        });
    }

    set filter(value: string) {
        this._filter = value;
        this.filteredContacts = this._contacts.filter((contact: ContactsModel) =>
            contact.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
    }

    get filter(): string {
        return this._filter;
    }
}