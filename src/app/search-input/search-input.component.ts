import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchInput: any;
  selectedUser: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //   this.sharedService.data.subscribe(data => {
    //     if (data != null) {

    this.selectedUser = this.sharedService.getOption();
    //     }
    // });
  }

  getValue(event): any {
    this.sharedService.setOption('value', event.target.value);
  }
}
