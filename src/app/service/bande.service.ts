import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { Bande } from '../modele/bande';

@Injectable({
  providedIn: 'root',
})
export class BandeService {

  private bandesUrl: string;


  constructor(
    private http: HttpClient){
      this.bandesUrl='http://localhost:8080/mordheim/mesbandes';
    }

  public getAllBandes(): Observable<Bande[]> {
    return this.http.get<Bande[]>(this.bandesUrl);
  }

  public getBandesById(id: number) : Observable<Bande> {
    return this.http.get(`${this.bandesUrl}/${id}`);
  }
}
