import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddGroupComponent } from './add-group/add-group.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: 'manageusers', component: ManageUsersComponent },
  { path: 'managegroups', component: ManageGroupsComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'editgroup/:id', component: EditGroupComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'addgroup', component: AddGroupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
