import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private serviceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.serviceUrl = environment.serviceUrl;
    if (!this.serviceUrl.endsWith(`/`)) {
      this.serviceUrl = `${this.serviceUrl}/`;
    }
  }

  getAllGroups(): Observable<any> {
    return this.httpClient.get(`${this.serviceUrl}api/groups`);
  }
  createGroup(group: Group): Observable<any> {
    return this.httpClient.post<Group>(`${this.serviceUrl}api/groups`, group);
  }
}
