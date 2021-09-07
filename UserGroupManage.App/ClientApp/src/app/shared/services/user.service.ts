import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.serviceUrl = environment.serviceUrl;
    if (!this.serviceUrl.endsWith(`/`)) {
      this.serviceUrl = `${this.serviceUrl}/`;
    }
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this.serviceUrl}api/users`);
  }
  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>(`${this.serviceUrl}api/users`, user);
  }
  getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.serviceUrl}api/users/${id}`);
  }

}
