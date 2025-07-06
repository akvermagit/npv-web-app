
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Npv {
  private apiUrl = 'https://localhost:7001/api/npv';

  constructor(private http: HttpClient) {}

  calculateNPV(cashFlows: number[], lowerBoundRate:number, upperBoundRate:number, rateIncrement:number): Observable<{ [rate: string]: number }> {
  var req = {
  "cashFlows": cashFlows,
  "lowerBoundRate": lowerBoundRate,
  "upperBoundRate": upperBoundRate,
  "rateIncrement": rateIncrement
}
    return this.http.post<{ [rate: string]: number }>(this.apiUrl, req);
  }
}
