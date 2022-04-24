import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planet!: Planet;
  countOfPlanets: number = 0;
  planets: Planet[] = this.planetsService.planets;
  planetsUrl = this.planetsService.planetsUrl;

  constructor(
    private planetsService: PlanetsService,
  ) { }

  ngOnInit(): void {
    this.getPlanets(this.planetsUrl);
  }

  getPlanets(url: string): void {
    for (let i = 1; i <= 6; i++) {
      let pageUrl = url + `?page=${i}`
      this.planetsService.getPlanets(pageUrl)
      .subscribe(planets => {
        if (this.planets.length < 60) {
          this.planets.push(...planets.results);
        }
      });
    }
  }
}
