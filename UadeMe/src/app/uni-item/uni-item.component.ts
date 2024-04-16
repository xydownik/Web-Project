import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {University} from "../models";

@Component({
  selector: 'app-uni-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './uni-item.component.html',
  styleUrl: './uni-item.component.css'
})
export class UniItemComponent {
    @Input() university!: University
}
