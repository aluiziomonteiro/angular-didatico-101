import { ContactsModel } from "./contacts.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    constructor(private http: HttpClient) { }

    private URL: string = 'http://localhost:3000/contacts';

    returnAll(): Observable<ContactsModel[]> {
        return this.http.get<ContactsModel[]>(this.URL);
    }

    returnById(contactId: number): Observable<ContactsModel> {
        return this.http.get<ContactsModel>(`${this.URL}/${contactId}`);
    }

    save(contact: ContactsModel): Observable<ContactsModel> {
        if (contact.id) {
            return this.http.put<ContactsModel>(`${this.URL}/${contact.id}`, contact);
        } else {
            return this.http.post<ContactsModel>(this.URL, contact);
        }
    }

    delete(contactId: number): Observable<any> {
        return this.http.delete<any>(`${this.URL}/${contactId}`);
    }
}

