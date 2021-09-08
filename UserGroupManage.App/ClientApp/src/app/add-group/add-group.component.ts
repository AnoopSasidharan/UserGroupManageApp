import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Creategroup } from '../shared/models/creategroup';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  groupForm: FormGroup;
  constructor(private groupService: GroupService) {
    this.groupForm = new FormGroup({
      Name: new FormControl(``, Validators.required),
      Description: new FormControl(``, Validators.required),
    })
  }

  ngOnInit(): void {
  }
  addGroup(): void {
    let newGroup: Creategroup = {
      description : this.groupForm.get(`Description`)?.value,
      name : this.groupForm.get(`Name`)?.value,
    }
    this.groupService.createGroup(newGroup).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      }
    )
  }
}
