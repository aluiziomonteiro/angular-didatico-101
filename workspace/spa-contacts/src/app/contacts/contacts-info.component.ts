import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactsModel } from "./contacts.model";
import { ContactsService } from "./contacts.service";

@Component({
    templateUrl: 'contacts-info.component.html'
})
export class ContactsInfoComponent implements OnInit {
    contactId: number;
    contact: ContactsModel;

    constructor(private contactsService: ContactsService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.contactId = +this.activatedRoute.snapshot.params['id'];

        if (this.contactId) {   // <-- Se existe id, carregue o contato existente
            this.returnById();
        } else {                // <-- Se não existe id, então carregue um contato nulo
            this.createContactNull();
        }
    }

    returnById(): void {
        this.contactsService.returnById(this.contactId).subscribe({
            next: contact => {
                this.contact = contact;
            },
            error: e => {
                console.log('Error in return by id!', e);
            }
        });
    }

    save(): void {
        this.contactsService.save(this.contact).subscribe({
            next: contact => console.log('Contact saved successfully', contact),
            error: e => console.log('Error in save contact', e)
        });
    }

    createContactNull(): void {
        this.contact = {
            id: null,
            image: null,
            name: null,
            phone: null,
            email: null,
            date: null,
            description: null,
            rating: null
        }
    }
}