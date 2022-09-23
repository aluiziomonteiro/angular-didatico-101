import { NgModule } from "@angular/core";
import { StarsComponent } from "./stars.component";

@NgModule({
    declarations: [
        StarsComponent
    ],
    exports: [
        StarsComponent
    ]
})
export class StarsModule { }