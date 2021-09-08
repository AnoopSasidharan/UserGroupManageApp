import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { InterceptorService } from './shared/services/interceptor.service';
import { AddUserComponent } from './add-user/add-user.component';
import { AddGroupComponent } from './add-group/add-group.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AuthCallbackComponent,
    EditUserComponent,
    EditGroupComponent,
    ManageGroupsComponent,
    ManageUsersComponent,
    AddUserComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
//    RouterModule.forRoot([
//    { path: '', component: HomeComponent, pathMatch: 'full' }
//], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
