import {Component, inject, OnInit, signal} from '@angular/core';
import {SpecialtyItemComponent} from "../specialty-item/specialty-item.component";
import {Discipline, Specialty} from "../models";
import {SpecialtyService} from "../specialty.service";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {UniversitiesComponent} from "../universities/universities.component";
import {DisciplineService} from "../discipline.service";
import {UniversityService} from "../university.service";
import {FooterComponent} from "../footer/footer.component";
@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [
    SpecialtyItemComponent,
    NgIf,
    NgForOf,
    UniversitiesComponent,
    FooterComponent
  ],
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css', "../specialty-item/specialty-item.component.css"]
})
export class SpecialtiesComponent implements OnInit{
  static constSpecList: Specialty[] = []
  specialtyList: Specialty[] = []
  specialtyService: SpecialtyService = inject(SpecialtyService)
  protected readonly SpecialtyService = SpecialtyService;
  protected readonly DisciplineService = DisciplineService;
  protected readonly UniversityService = UniversityService;
  sortByList: string[] = ['название','баллы по квоте','баллы общ.', 'колл. грантов', 'колл. ВУЗов', ]


  ngOnInit(): void {
    this.getSpecialties()
  }
  constructor() {
    this.specialtyList = []
  }
  getSpecialties(){
    if(SpecialtiesComponent.constSpecList.length) {
      this.specialtyList = SpecialtiesComponent.constSpecList
      return
    }
    SpecialtiesComponent.constSpecList = this.specialtyService.getSpecialties()
    this.specialtyList = SpecialtiesComponent.constSpecList
    // this.specialtyService.getSpecialties().subscribe(specialties => {
    //   this.specialtyList = specialties
    //   if(!SpecialtiesComponent.constSpecList.length) {
    //     SpecialtiesComponent.constSpecList = this.specialtyList
    //   }
    // })
  }

  deleteSpecialty(id: number) {
    this.specialtyService.deleteSpecialty(id).subscribe()
  }

  filterResults(text: string) {
    if (!text) {
      this.specialtyList = SpecialtiesComponent.constSpecList;
      return;
    }
    this.specialtyList = SpecialtiesComponent.constSpecList.filter(specialty =>
      specialty.name.toLowerCase().includes(text.toLowerCase())
    );
  }


  filterListBySpecialty(it: string) {
    this.specialtyList = SpecialtiesComponent.constSpecList.filter(specialty =>
      specialty.name == it
    );
  }
  filterListByUniversity(it: string) {
    this.specialtyList = SpecialtiesComponent.constSpecList.filter(specialty =>

      UniversityService.constList.some(uni => uni.specialties.includes(specialty) && uni.name == it)
    );
  }
  filterListByDiscipline(it: Discipline) {
    this.specialtyList = SpecialtiesComponent.constSpecList.filter(specialty =>
      specialty.disciplines.includes(it)
    );
  }
  sortBy(param: string){
    if(param == 'колл. ВУЗов'){
      this.specialtyList.sort((a,b) => b.unisNum - a.unisNum)
    }
    else if(param == 'колл. грантов'){
      this.specialtyList.sort((a,b) => b.grants - a.grants)
    }
    else if(param== 'баллы общ.'){
      this.specialtyList.sort((a,b) => b.general - a.general)
    }
    else if(param == 'баллы по квоте'){
      this.specialtyList.sort((a,b) => b.quota - a.quota)
    }
    else { //'название'
      this.specialtyList.sort((a,b) => a.name.localeCompare(b.name))
    }
  }
  returnAll(){
    this.specialtyList = this.specialtyService.getSpecialties()
  }

}
