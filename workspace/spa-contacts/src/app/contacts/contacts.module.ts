import { CommonModule } from "@angular/common";
import { ContactsInfoComponent } from "./contacts-info.component";
import { ContactsListComponent } from "./contacts-list.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ReplaceModule } from "../shared/pipes/replace-pipe/replace.module";
import { RouterModule } from "@angular/router";
import { StarsModule } from "../shared/components/stars/stars.module";

@NgModule({
    declarations: [
        ContactsListComponent,
        ContactsInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule, 
        ReplaceModule,
        RouterModule.forChild([
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
                path: 'contacts/info', component: ContactsInfoComponent
            }
        ]),
        StarsModule
    ]
})
export class ContactsModule { }