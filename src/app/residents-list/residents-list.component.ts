import { Component, Input, OnInit } from '@angular/core';
import { Resident } from '../resident';
import { ResidentsService } from '../residents.service';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss']
})
export class ResidentsListComponent implements OnInit {
  @Input() residentsUrl: string[] = [];
  @Input() pipeValue!: string;

  residents: Resident[] = [];
  gender: string = 'female';
  constructor(
    private residentsService: ResidentsService
  ) { }

  ngOnInit(): void {
    this.residentsService.residentsUrl.subscribe((residentsUrl) => this.getResidents(residentsUrl));
  }

  getResidents(url: string[]): void {
    for (let i = 0; i < url.length; i++) {
      this.residentsService.getResident(url[i])
        .subscribe(resident => {
          this.residents.push(resident);
        });
    }
  }
}
