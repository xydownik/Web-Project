import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {University} from "../models";
import {UniInfoComponent} from "../uni-info/uni-info.component";

@Component({
  selector: 'app-uni-item',
  standalone: true,
  imports: [RouterModule, UniInfoComponent],
  templateUrl: './uni-item.component.html',
  styleUrl: './uni-item.component.css'
})
export class UniItemComponent {
    @Input() university!: University
}
