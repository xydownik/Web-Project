import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {Consultant} from "../models";
import {ConsultService} from "../consult.service";
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";
import {ConsultItemComponent} from "../consult-item/consult-item.component";

@Component({
  selector: 'app-consult-page',
  standalone: true,
  imports: [RouterModule, NgForOf, NgIf, FooterComponent, ConsultItemComponent],
  templateUrl: './consult-page.component.html',
  styleUrl: './consult-page.component.css'
})
export class ConsultPageComponent implements OnInit{
  consultants!: Consultant[]
  constructor(private consultService: ConsultService) {
    this.consultants = []
  }

  ngOnInit(): void {
    this.getConsultants()
  }

  getConsultants(){
    this.consultants = this.consultService.getConsultants()
  }



}
