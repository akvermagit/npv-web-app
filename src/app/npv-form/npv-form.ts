import { Component } from '@angular/core';

import { Npv } from '../npv';
import { NpvResults } from "../npv-results/npv-results";
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-npv-form',
  standalone:true,
  imports: [NpvResults, FormsModule],
  providers:[HttpClient],
  templateUrl: './npv-form.html',
  styleUrl: './npv-form.scss',

})
export class NpvForm {

cashFlowsInput = '';
lowerBoundRate=0;
upperBoundRate= 0;
rateIncrement= 0;
results: { [rate: string]: number } | null = null;

constructor(private npvService: Npv) {}

submit() {
    const cashFlows = this.cashFlowsInput.split(',').map(Number);

    this.npvService.calculateNPV(cashFlows, this.lowerBoundRate, this.upperBoundRate, this.rateIncrement).subscribe(data => {
      this.results = data;
    });
  }



}
