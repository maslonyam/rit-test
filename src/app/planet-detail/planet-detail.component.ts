import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../filter.service';

import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';
import { ResidentsService } from '../residents.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet = {
    name: "",
	  rotation_period: "",
	  orbital_period: "",
	  diameter: "",
	  climate: "",
	  gravity: "",
	  terrain: "",
	  surface_water: "",
	  population: "",
	  residents: [],
	  films: [],
	  created: "",
	  edited: "",
	  url: ""
  };
  planets: Planet[] = this.planetsService.planets;
  planetName: string | null = '';
  residentsUrl: string[] = [];
  pipeValue: string = 'all';

  constructor(
    private route: ActivatedRoute,
    private planetsService: PlanetsService,
    private residentsService: ResidentsService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.getPlanet();
    this.filterService.inputValue.subscribe((value) => this.setPipeValue(value));
  }

  getPlanet(): void {
    const name = this.route.snapshot.paramMap.get('id');
    this.planetName = name;
    for (let i = 1; i <= 60; i++) {
      this.planetsService.getPlanet(i)
        .subscribe(apiPlanet => {
          if (apiPlanet.name === name) {
            this.planet = apiPlanet;
            this.residentsService.setResidentsUrl(this.planet.residents);
          }
        });
    }
  }

  setPipeValue(value: string) {
    this.pipeValue = value;
  } 

}
