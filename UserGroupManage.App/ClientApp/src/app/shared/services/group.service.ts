import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Group } from '../models/group';
import { Groupsearchparams } from '../models/groupsearchparams';

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

  getAllGroups(searchparams: Groupsearchparams): Observable<any> {
    let url = `${this.serviceUrl}api/groups`;

    let _params = new HttpParams();
    if (searchparams.name) {
      _params = _params.append('Name', searchparams.name);
    }
    if (searchparams.includeUsers) {
      _params = _params.append('IncludeUsers', searchparams.includeUsers);
    }
    


    return this.httpClient.get(`${this.serviceUrl}api/groups`, { params: _params });
  }
  createGroup(group: Group): Observable<any> {
    return this.httpClient.post<Group>(`${this.serviceUrl}api/groups`, group);
  }
  getGroupById(id: number): Observable<any> {
    return this.httpClient.get(`${this.serviceUrl}api/groups/${id}`);
  }
  deleteGroup(id: number): Observable<any> {
    return this.httpClient.delete(`${this.serviceUrl}api/groups/${id}`);
  }
}
