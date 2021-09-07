import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Group } from '../shared/models/group';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.css']
})
export class ManageGroupsComponent implements OnInit {
  groups: Group[] = [];
  searchForm: FormGroup;
  constructor(private groupService: GroupService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(``, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  searchGroups(): void {
    this.groupService.getAllGroups({ name: this.searchForm.get(`searchText`)?.value }).subscribe(
      data => {
        this.groups = data;
      },
      err => {
        console.error(err);
      }
    )
  }
  deleteGroup(group: Group): void {
    
    this.groupService.deleteGroup(group.id).subscribe(
      data => {
        this.groups.splice(this.groups.findIndex(g => g.id == group.id),1);
      },
      err => {

      }
    )
  }
}
