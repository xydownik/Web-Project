import {Component, Input} from '@angular/core';
import {Specialty, University} from "../models";
import {NgForOf, NgIf} from "@angular/common";


@Component({
  selector: 'app-specialty-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './specialty-item.component.html',
  styleUrl: './specialty-item.component.css'
})
export class SpecialtyItemComponent {
  @Input()specialty!: Specialty
  isActive: boolean = false
  toggle(){
    this.isActive = !this.isActive;
  }



}
