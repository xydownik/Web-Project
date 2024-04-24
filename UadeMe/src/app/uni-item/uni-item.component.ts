import {Component, Input} from '@angular/core';
import {RouterModule} from "@angular/router";
import {University} from "../models";
import {UniInfoComponent} from "../uni-info/uni-info.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-uni-item',
  standalone: true,
  imports: [RouterModule, JsonPipe],
  templateUrl: './uni-item.component.html',
  styleUrl: './uni-item.component.css'
})
export class UniItemComponent {
    @Input() university!: University
}
