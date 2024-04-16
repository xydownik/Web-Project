import {Component, inject, Input, OnInit} from '@angular/core';
import {University} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {UniversityService} from "../university.service";

@Component({
  selector: 'app-uni-info',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './uni-info.component.html',
  styleUrl: './uni-info.component.css'
})
export class UniInfoComponent implements OnInit{
  university!: University | undefined
  loaded: boolean = false

  constructor(private route: ActivatedRoute, private uniService: UniversityService) {
    this.university = undefined
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        const name = params.get('name')
      if(name){
        this.university = this.uniService.getUniversities().find(uni => uni.name.localeCompare(name))
        this.loaded = true
      }
      else this.loaded = false
      }
      // if(id){
      //   this.uniService.getUniversity(+id).subscribe(uni =>
      //   this.university = uni)
      // }
      // }

    )
  }

}
