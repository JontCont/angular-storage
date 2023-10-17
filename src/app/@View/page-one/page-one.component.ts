import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/@Service/global-data.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(
    private globalDataService: GlobalDataService
  ) {}

  testValue:string = "";
  onChangeValue(event: any | null) {
    this.globalDataService.setData('testValue', event);
  }
}
