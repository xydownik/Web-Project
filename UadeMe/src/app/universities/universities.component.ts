import { Component, OnInit } from '@angular/core';
import { UniDetailsService } from '../uni-details.service';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [],
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
