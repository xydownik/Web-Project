import {Component, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {RoadmapComponent} from "../roadmap/roadmap.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  styleUrl: './test-page.component.css'
})
export class TestPageComponent implements OnInit{
  ngOnInit(): void {
  }
}
