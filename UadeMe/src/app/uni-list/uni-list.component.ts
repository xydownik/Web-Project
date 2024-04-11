import {Component, OnInit} from '@angular/core';
import {University} from "../models";
import {UniversitiesComponent} from "../universities/universities.component";
import {UniversityService} from "../university.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-uni-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './uni-list.component.html',
  styleUrl: './uni-list.component.css'
})
export class UniListComponent  implements OnInit{
  static constUnis: University[] = []
  unis !: University[];
  constructor(private uniService: UniversityService) {
    this.unis = []
  }
  ngOnInit(): void {
    this.getUniversities()
  }

  private getUniversities() {
    if(UniListComponent.constUnis.length) {
      this.unis = UniListComponent.constUnis
      return
    }
    this.uniService.getUniversities().subscribe(unis => {
      this.unis = unis
      if(!UniListComponent.constUnis.length) {
        UniListComponent.constUnis = this.unis
      }
    })
  }
}
