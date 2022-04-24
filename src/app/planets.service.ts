import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Planet } from './planet';
import { PlanetsApiType } from './api';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  planetsUrl = 'https://swapi.dev/api/planets/';
  planets: Planet[] = []

  constructor(
    private http: HttpClient
  ) { }

  //getPlanets(): Observable<PlanetsApiType> {
  //  return this.http.get<PlanetsApiType>(this.planetsUrl);
  //}

  getCountOfPlanets(): Observable<PlanetsApiType> {
    return this.http.get<PlanetsApiType>(this.planetsUrl);
  }

  getPlanet(id: number): Observable<Planet> {
    const url = `${this.planetsUrl}${id}`;
    return this.http.get<Planet>(url);
  }

  getPlanets(url: string): Observable<PlanetsApiType> {
    return this.http.get<PlanetsApiType>(url);
  }

  //getPlanets(): void {
  //  for (let i = 1; i <= 6; i++) {
  //    const pageUrl = this.planetsUrl + `?page=${i}`;
  //    this.http.get<PlanetsApiType>(pageUrl)
  //      .subscribe(page => {
  //        if (this.planets.length < 60) {
  //          this.planets.push(...page.results);
  //        }
  //      });
  //  }
  //  console.log(this.planets);
  //}
}
