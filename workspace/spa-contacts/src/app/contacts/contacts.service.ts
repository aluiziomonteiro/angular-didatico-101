import { ContactsModel } from "./contacts.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    returnAll(): ContactsModel[]{
        return CONTACTS;
    }    
}

const CONTACTS: ContactsModel[] = [
    {
        id:1,
        image:'/assets/img/01.jpg',
        name:'Kimberly',
        phone: '11-1111-1111',
        email: 'kimberly@gmail.com',
        date:'1999-01-11',
        description: 'She is a doctor',
        rating:5.0
    },
    {
        id:2,
        image:'/assets/img/02.jpg',
        name:'Elisabet',
        phone: '22-2222-2222',
        email: 'elisabet@gmail.com',
        date:'1988-02-21',
        description: 'She is a shop assistant',
        rating:2.5
    },
    {
        id:3,
        image:'/assets/img/03.jpg',
        name:'Paul',
        phone: '33-3333-3333',
        email: 'paul@gmail.com',
        date:'2000-03-01',
        description: 'He is a actor',
        rating:3.5
    },
    {
        id:4,
        image:'/assets/img/04.jpg',
        name:'Rosemary',
        phone: '44-4444-4444',
        email: 'rosemary@gmail.com',
        date:'1989-04-04',
        description: 'She is a lawyer',
        rating:4.5
    },
    {
        id:5,
        image:'/assets/img/05.jpg',
        name:'Arnold',
        phone: '55-5555-5555',
        email: 'arnold@gmail.com',
        date:'2002-05-04',
        description: 'He is a police officer',
        rating:3.5
    },
    {
        id:6,
        image:'/assets/img/06.jpg',
        name:'Annabele',
        phone: '66-6666-6666',
        email: 'annabele@gmail.com',
        date:'1999-06-12',
        description: 'She is a teacher',
        rating:1.0
    }, 
    {
        id:7,
        image:'/assets/img/07.jpg',
        name:'Aaron',
        phone: '77-7777-7777',
        email: 'aaron@gmail.com',
        date:'1989-07-04',
        description: 'He is a journalist/writer',
        rating:4.5
    },
    {
        id:8,
        image:'/assets/img/08.jpg',
        name:'Kyoto',
        phone: '88-8888-8888',
        email: 'kioto@gmail.com',
        date:'2002-08-04',
        description: 'She is a nurse',
        rating:3.5
    },
    {
        id:9,
        image:'/assets/img/09.jpg',
        name:'Jhony',
        phone: '99-9999-9999',
        email: 'jhony@gmail.com',
        date:'1999-09-15',
        description: 'He is a actor',
        rating:4.5
    },
    {
        id:10,
        image:'/assets/img/10.jpg',
        name:'Kathy',
        phone: '00-0000-0000',
        email: 'kathy@gmail.com',
        date:'1999-10-09',
        description: 'He is a barmaid',
        rating:0.5
    }
];