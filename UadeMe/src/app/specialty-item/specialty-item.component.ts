import {Component, Input} from '@angular/core';
import {Specialty, University} from "../models";


@Component({
  selector: 'app-specialty-item',
  standalone: true,
  imports: [],
  templateUrl: './specialty-item.component.html',
  styleUrl: './specialty-item.component.css'
})
export class SpecialtyItemComponent {
  @Input()specialty!: Specialty



}
