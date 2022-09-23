import { Error404Component } from "./error-404.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        RouterModule.forRoot([
            {
                path: '**', component: Error404Component
            }
        ])
    ]
})
export class Error404Module { }