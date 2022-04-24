import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public inputValue = new Subject<string>();

  constructor() { }

  public setInputValue(value: string) {
    this.inputValue.next(value);
  }
}
