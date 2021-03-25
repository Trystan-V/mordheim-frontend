import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { Bande } from '../bande';

@Injectable({
  providedIn: 'root',
})
export class BandeService {

  private bandesUrl: string;

  constructor(
    private http: HttpClient){
      this.bandesUrl='Access-Control-Allow-Origin: http://localhost:8080/mesbandes';
    }

  public getAllBandes(): Observable<Bande[]> {
    return this.http.get<Bande[]>(this.bandesUrl);

  }
}
