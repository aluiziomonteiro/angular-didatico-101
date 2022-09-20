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
        this.contact = this.contactsService.returnById(this.contactId);
    }

    save(): void {
        this.contactsService.save(this.contact);
    }
}