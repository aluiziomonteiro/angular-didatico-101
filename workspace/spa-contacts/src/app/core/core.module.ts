import { Error404Module } from "./components/error-404/error-404.module";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        Error404Module,
        RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { }
