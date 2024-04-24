import {Component, inject, Input, OnInit} from '@angular/core';
import {University} from "../models";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {UniversityService} from "../university.service";
import {UniListComponent} from "../uni-list/uni-list.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-uni-info',
  standalone: true,
  imports: [RouterModule, NgForOf],
  templateUrl: './uni-info.component.html',
  styleUrl: './uni-info.component.css'
})
export class UniInfoComponent implements OnInit{
  university!: University
  loaded: boolean = false

  constructor(private route: ActivatedRoute, private uniService: UniversityService) {
  }
  ngOnInit(): void {
    let number = this.route.snapshot.params['id']
    this.uniService.getUniversity(number).subscribe(uni => {
      this.university = uni
      this.loaded = true
    })
  }

  protected readonly Symbol = Symbol;
}
