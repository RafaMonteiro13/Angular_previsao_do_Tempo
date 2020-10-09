import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {
  constructor(private httpClient: HttpClient) {
  }

    public obterPrevisoes(): Observable<Previsao[]> {
      return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=itu&appid=d911a5ee0c76c51ec7bb4ea567027433&units=metric&lang=pt_br&cnt=16');
      }
    }
