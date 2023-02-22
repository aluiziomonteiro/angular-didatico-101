import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges{

  @Input()
  rating: number;
  starsWidth: number;

  ngOnChanges(): void {
    this.starsWidth = this.rating * 14.8;
  }
}
