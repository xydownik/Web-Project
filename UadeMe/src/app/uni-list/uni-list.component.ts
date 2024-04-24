import {Component, NgModule, OnInit} from '@angular/core';
import {City, Discipline, Specialty, University} from "../models";
import {UniversitiesComponent} from "../universities/universities.component";
import {UniversityService} from "../university.service";
import {RouterLink} from "@angular/router";
import {UniItemComponent} from "../uni-item/uni-item.component";
import {NgForOf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {SpecialtyService} from "../specialty.service";
import {CityService} from "../city.service";
import {SpecialtiesComponent} from "../specialties/specialties.component";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-uni-list',

  imports: [
    RouterLink,
    UniItemComponent,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './uni-list.component.html',
  standalone: true,
  styleUrl: './uni-list.component.css'
})
export class UniListComponent  implements OnInit{
  constList: University[] = [];
  unis: University[] = [];
  cities: City[] = [];
  specialties: Specialty[] = [];
  sortByList: string[] = ['цена', 'город', 'баллы на грант', 'баллы на платный', 'название'];

  constructor(
    private uniService: UniversityService,
    private cityService: CityService,
    private specService: SpecialtyService
  ) {}

  ngOnInit(): void {
    this.getUniversities();
    this.getCities();
    this.getSpecialties();
  }

  private getUniversities(): void {
   if(this.constList.length){
     this.unis = this.constList
     return
   }
   this.uniService.getUniversities().subscribe(unis =>{
     this.unis = unis
     this.constList = this.unis
   })

  }

  private getCities(): void {
    this.cityService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }

  private getSpecialties(): void {
    this.specService.getSpecialties().subscribe(specs => {
      this.specialties = specs;
    });
  }

  filterResults(text: string): void {
    if (!text) {
      this.unis = [];
      return;
    }
    this.unis = this.unis.filter(uni =>
      uni.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  filterListByUniversity(uniName: string): void {
    this.unis = this.constList.filter(uni =>
      uni.name.toLowerCase() === uniName.toLowerCase()
    );
  }

  filterListBySpecialty(specialty: Specialty): void {
    this.unis = this.constList.filter(uni =>
      uni.specialties.some(spec => spec.name === specialty.name)
    );
  }

  filterListByCity(city: City): void {
    this.unis = this.constList.filter(uni =>
      uni.location.city.toLowerCase() === city.city.toLowerCase()
    );
  }

  sortBy(param: string): void {
    switch (param) {
      case 'цена':
        this.unis.sort((a, b) => a.cost - b.cost);
        break;
      case 'город':
        this.unis.sort((a, b) => a.location.city.localeCompare(b.location.city));
        break;
      case 'баллы на грант':
        this.unis.sort((a, b) => a.grantScore - b.grantScore);
        break;
      case 'баллы на платный':
        this.unis.sort((a, b) => a.paidScore - b.paidScore);
        break;
      default: //'название'
        this.unis.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  returnAll(): void {
    this.getUniversities();
  }
}
