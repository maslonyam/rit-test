import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-benefits-list',
  templateUrl: './benefits-list.component.html',
  styleUrls: ['./benefits-list.component.scss']
})
export class BenefitsListComponent implements OnInit {
  @Input() public planet!: Planet;
  constructor() { }

  ngOnInit(): void {
  }

}
