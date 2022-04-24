import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Resident } from './resident';


@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
  public residentsUrl = new Subject<string[]>();

  constructor(
    private http: HttpClient
  ) { }

  getResident(url: string): Observable<Resident> {
    return this.http.get<Resident>(url);
  }

  setResidentsUrl(url: string[]) {
    this.residentsUrl.next(url);
  }
}
