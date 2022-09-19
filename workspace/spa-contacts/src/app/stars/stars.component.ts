import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-stars',
    templateUrl: 'stars.component.html',
    styleUrls: ['stars.component.css']
})
export class StarsComponent {

    @Input()
    rating: number;
    starsWidth: number;

    ngOnChanges(): void {
        this.starsWidth = this.rating * 74 / 5;
    }
}