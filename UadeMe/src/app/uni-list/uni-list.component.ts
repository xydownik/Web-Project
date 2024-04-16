import {Component, OnInit} from '@angular/core';
import {City, Discipline, Specialty, University} from "../models";
import {UniversitiesComponent} from "../universities/universities.component";
import {UniversityService} from "../university.service";
import {RouterLink} from "@angular/router";
import {UniItemComponent} from "../uni-item/uni-item.component";
import {NgForOf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {SpecialtyService} from "../specialty.service";
import {CityService} from "../city.service";

@Component({
  selector: 'app-uni-list',
  standalone: true,
  imports: [
    RouterLink,
    UniItemComponent,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './uni-list.component.html',
  styleUrl: './uni-list.component.css'
})
export class UniListComponent  implements OnInit{
  static constUnis: University[] = []
  unis !: University[];
  sortByList: string[] = ['цена', "город", "баллы на грант", "баллы на платный", "название"]
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
    UniListComponent.constUnis = UniversityService.constList
    this.unis = UniListComponent.constUnis

    // this.uniService.getUniversities().subscribe(unis => {
    //   this.unis = unis
    //   if(!UniListComponent.constUnis.length) {
    //     UniListComponent.constUnis = this.unis
    //   }
    // })
  }
  filterResults(text: string) {
    if (!text) {
      this.unis = UniListComponent.constUnis;
      return;
    }
    this.unis = UniListComponent.constUnis.filter(uni =>
      uni.name.toLowerCase().includes(text.toLowerCase())
    );
  }


  filterListByUniversity(it: string) {
    this.unis = UniListComponent.constUnis.filter(uni =>
      uni.name == it
    );
  }
  filterListBySpecialty(it: Specialty) {
    this.unis = UniListComponent.constUnis.filter(uni =>
      uni.specialties.includes(it)
    );
  }
  filterListByCity(it: City) {
    this.unis = UniListComponent.constUnis.filter(uni =>
    uni.location == it)
  }
  sortBy(param: string){
    if(param == 'цена'){
      this.unis.sort((a,b) => b.cost - a.cost)
    }
    else if(param == 'город'){
      this.unis.sort((a,b) => a.location.city.localeCompare(b.location.city) )
    }
    else if(param== 'баллы на грант'){
      this.unis.sort((a,b) => b.grantScore - a.grantScore)
    }
    else if(param == 'баллы на платный'){
      this.unis.sort((a,b) => b.paidScore - a.paidScore)
    }
    else { //'название'
      this.unis.sort((a,b) => a.name.localeCompare(b.name))
    }
  }
  returnAll(){
    this.unis = this.uniService.getUniversities()
  }

  protected readonly UniversityService = UniversityService;
  protected readonly SpecialtyService = SpecialtyService;
  protected readonly CityService = CityService;
}
