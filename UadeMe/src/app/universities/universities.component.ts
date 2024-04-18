import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import {RouterLink} from "@angular/router";
import {UniListComponent} from "../uni-list/uni-list.component";

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [
    RouterLink,
    UniListComponent
  ],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.css'
})
export class UniversitiesComponent {
 /* data: any[];

  constructor(private dataService: UniDetailsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    })
  }*/
}
