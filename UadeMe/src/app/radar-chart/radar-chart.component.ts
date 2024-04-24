import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Chart, registerables, RadarController }   from 'chart.js';
import { TestRes2 } from '../test-res-2';import { AUTO_STYLE } from '@angular/animations';
import { RadialLinearScale, ArcElement } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit {
  radarChart: any;

  @Input() testResults: TestRes2 | undefined;

  ngOnInit(): void {
    console.log(this.testResults);
    this.createRadarChart();
  }

  createRadarChart(): void {
    this.radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['РАБОТА С ЛЮДЬМИ', 'ЭКСТРЕМАЛЬНЫЙ', 'ИССЛЕДОВАНИЯ',
        'ПЛАНОВО-ЭКОНОМИЧЕСКИЙ', 'ЭСТЕТИКА', 'ПРАКТИЧЕСКИЙ'],
        datasets: [{
          label: this.testResults?.username,
          data: [this.testResults?.people, this.testResults?.extreme,
                this.testResults?.research, this.testResults?.economic,
              this.testResults?.aesthetics, this.testResults?.practice],
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
