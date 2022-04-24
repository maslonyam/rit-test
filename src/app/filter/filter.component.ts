import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
  }

  setValue(event: Event): void {
    this.filterService.setInputValue
      ((event.target as HTMLInputElement).value);
  }
}
