import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, ElementRef, inject, Input, OnChanges, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-npv-results',
  templateUrl: './npv-results.html',
  imports:[FormsModule, CommonModule, ChartModule]
})
export class NpvResults implements OnChanges, OnInit {

  @Input() results: { [rate: string]: number } | null = null;


   basicData: any;

    basicOptions: any;

    platformId = inject(PLATFORM_ID);

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit(): void {
    }

    showChart(label:any, data:any){
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            this.basicData = {
                labels: label,
                datasets: [
                    {
                        label: 'NPV',
                        data: data,
                        backgroundColor: [
                            'rgba(249, 115, 22, 0.2)',
                            'rgba(6, 182, 212, 0.2)',
                            'rgb(107, 114, 128, 0.2)',
                            'rgba(139, 92, 246, 0.2)',
                        ],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            this.cd.markForCheck()

    }




  ngOnChanges() {
    console.log(this.results);

    if (this.results) {
      const labels = Object.keys(this.results);
      const data = Object.values(this.results);
      this.showChart(labels, data);
    }
  }
}
