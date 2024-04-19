import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables, RadarController }   from 'chart.js';
import { TestRes2 } from '../test-res-2';import { AUTO_STYLE } from '@angular/animations';
import { RadialLinearScale, ArcElement } from 'chart.js';
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit {
  radarChart: any;

  chartData: TestRes2[] = [
    {
      "username": 'Akzhan',
      "extreme": 5,
      "people": 6,
      "practice": 5,
      "research": 4,
      "aesthetics": 7,
      "economic": 8
    }
  ]

  ngOnInit(): void {
      this.createRadarChart();
  }

  createRadarChart(): void {
    this.radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['РАБОТА С ЛЮДЬМИ', 'ЭКСТРЕМАЛЬНЫЙ', 'ИССЛЕДОВАНИЯ',
        'ПЛАНОВО-ЭКОНОМИЧЕСКИЙ', 'ЭСТЕТИКА', 'ПРАКТИЧЕСКИЙ'],
        datasets: [{
          label: this.chartData[0].username,
          data: [this.chartData[0].people, this.chartData[0].extreme,
                this.chartData[0].research, this.chartData[0].economic,
              this.chartData[0].aesthetics, this.chartData[0].practice],
          fill: true,
          backgroundColor: ' rgba(0, 70, 124, 0.5)',
          borderColor: 'rgba(0, 70, 124)',
          pointBackgroundColor:  'rgba(0, 70, 124) ',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 207, 77, 1)',
        }]
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 8,
            angleLines: {display:true,
              lineWidth: 1.5,
              color: 'rgba(128, 128, 128, 0.8)'
            },
            ticks: {
              font: {
                family: 'Roboto',
                size: 14,
              }
            },
            pointLabels: {display: true,
              font: {
                size: 14,
              },
              color: '#1B1AE1',
            },

            grid: {
              color: 'rgb(70, 70, 70)',
              lineWidth: 1.5,
            },

          }
        },
        plugins: {
          title: {
            display: false,
            text: "Radar Chart",
            position: 'bottom',
            padding: -50
          },
          legend: {
            display: true,
            position: 'chartArea',
            align: 'center',
            labels: {
              font: {
                size: 14,
              },
              padding: -40
            }

          }
        }
      }
    });
  }
}