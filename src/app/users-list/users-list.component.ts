import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { UsersListService } from './users-list.service';
import { SearchFilterPipe } from './search-filter.pipe';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userList: any;
  searchModel: any;
  constructor(private usersListService: UsersListService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getAllUserList();
      this.searchModel = this.sharedService.getOption();
  }
  getAllUserList(): any {
    this.usersListService.getAllUsers()
    .subscribe(res => {
      this.userList = res?.body;
    });
  }
  passdata(name): any {
    this.sharedService.setOption('name',name);
  }

}
