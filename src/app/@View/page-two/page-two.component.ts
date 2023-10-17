import { GlobalDataService } from './../../@Service/global-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent {
  constructor(private globalDataService: GlobalDataService) {}

  testValue: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let data = this.globalDataService.getData('testValue');
    console.log(data);
  }
}
