import {Component, Input} from '@angular/core';
import {Consultant} from "../models";
import {NgIf} from "@angular/common";
import {RatingComponent} from "../rating/rating.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-consult-item',
  standalone: true,
  imports: [
    NgIf,
    RatingComponent,
    RouterLink
  ],
  templateUrl: './consult-item.component.html',
  styleUrl: './consult-item.component.css'
})
export class ConsultItemComponent {
  @Input() consult!: Consultant
  isActive: boolean = false
  toggle(){
    this.isActive = !this.isActive;
  }
}
