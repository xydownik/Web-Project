import {Component, inject, OnInit, signal} from '@angular/core';
import {SpecialtyItemComponent} from "../specialty-item/specialty-item.component";
import {Discipline, Specialty, University} from "../models";
import {SpecialtyService} from "../specialty.service";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";
import {UniversitiesComponent} from "../universities/universities.component";
import {DisciplineService} from "../discipline.service";
import {UniversityService} from "../university.service";
import {FooterComponent} from "../footer/footer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [
    SpecialtyItemComponent,
    NgIf,
    NgForOf,
    UniversitiesComponent,
    FooterComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css', "../specialty-item/specialty-item.component.css"]
})
export class SpecialtiesComponent implements OnInit{
  searchText: string = ''
  constUnis: University[] = []
  constSpecList: Specialty[] = []
  specialtyList: Specialty[] = []
  universities !: University[]
  disciplines!: Discipline[]
  protected readonly DisciplineService = DisciplineService;
  protected readonly UniversityService = UniversityService;
  sortByList: string[] = ['название','баллы по квоте','баллы общ.', 'колл. грантов', 'колл. ВУЗов', ]


  ngOnInit(): void {
    this.getSpecialties()
  }
  constructor(private specialtyService: SpecialtyService, private uniService: UniversityService,
              private discService : DisciplineService) {
    this.specialtyList = []
  }
  private getSpecialties(){
    if(this.constSpecList.length){
      this.specialtyList = this.constSpecList
      return
    }
    this.specialtyService.getSpecialties().subscribe((spec: Specialty[]) => {
      this.specialtyList = spec
      this.constSpecList = this.specialtyList;
    })
    this.uniService.getUniversities().subscribe(unis =>{
      this.universities = unis
      this.constUnis = this.universities
    })
    this.discService.getDisciplines().subscribe(disc =>{
      this.disciplines = disc
    })
  }


  filterResults() {
    if (!this.searchText) {
      this.specialtyList = this.constSpecList;
      return;
    }
    this.specialtyList = this.constSpecList.filter(specialty =>
      specialty.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }


  filterListBySpecialty(it: string) {
    this.specialtyList = this.constSpecList.filter(specialty =>
      specialty.name == it
    );
  }
  filterListByUniversity(it: University) {

    this.specialtyList = it.specialties
  }
  filterListByDiscipline(it: Discipline) {
    this.specialtyList = this.constSpecList.filter(specialty =>
      specialty.disciplines.some(disc =>disc.name.localeCompare(it.name))
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
    this.specialtyList = this.constSpecList
  }

}
