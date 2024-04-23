import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating!: number;
  stars = [1, 2, 3, 4, 5];

  setRating(star: number) {
    console.log('Selected rating:', star);
  }
}
