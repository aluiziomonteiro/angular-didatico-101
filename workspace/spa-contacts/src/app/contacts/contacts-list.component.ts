import { Component, OnInit } from "@angular/core";

import { ContactsModel } from "./contacts.model";
import { ContactsService } from "./contacts.service";

@Component({
    selector: 'app-contacts-list',
    templateUrl: './contacts-list.component.html',
    styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

    filteredContacts: ContactsModel[] = [];
    _contacts: ContactsModel[] = [];
    _filter: string;

    constructor(private contactsService: ContactsService) { }

    ngOnInit() {
        this._contacts = this.contactsService.returnAll();
        this.filteredContacts = this._contacts;
    }

    set filter(value: string) {
        this._filter = value;
        this.filteredContacts = this._contacts.filter((contact: ContactsModel) => contact.name.toLocaleLowerCase().indexOf(this._filter.toLocaleLowerCase()) > -1);
    }

    get filter(): string {
        return this._filter;
    }
}