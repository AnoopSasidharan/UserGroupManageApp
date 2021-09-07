import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../shared/models/group';
import { Groupsearchparams } from '../shared/models/groupsearchparams';
import { User } from '../shared/models/user';
import { BusyService } from '../shared/services/busy.service';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  groups: Group[] = [];
  constructor(private groupService: GroupService,
              private router: Router,
              private busy: BusyService) {
  }

  ngOnInit(): void {
    this.busy.showBusy(``);
    let params: Groupsearchparams = {
      includeUsers: true
    }
    this.groupService.getAllGroups(params).subscribe(
      data => {
        this.groups = data;
        this.busy.hideBusy();
      },
      err => {
        console.error(err);
        this.busy.hideBusy();
      }
    )
  }
  editUser(user: User): void {
    console.log(user);
    //this.router.navigate([`/edituser`, user.id], { state: { data: user } });
  }
}
