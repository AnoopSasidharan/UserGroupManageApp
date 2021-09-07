import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'oidc-client';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: User[];
  searchForm: FormGroup;
  constructor(private userService: UserService) {
    this.searchForm = new FormGroup({
      searchText: new FormControl(``, Validators.required)
    })
  }

  ngOnInit(): void {
  }
  searchUsers(): void {

  }
  deleteUser(user: User): void {

  }
}
