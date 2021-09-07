import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from '../shared/models/group';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class EditGroupComponent implements OnInit {

  group: Group;
  private id: number;
  constructor(private groupService: GroupService, private route: ActivatedRoute) {
    //this.id = route.params.pipe(map(p => p.id));

  }

  ngOnInit(): void {
    //const id: Observable<string> = this.route.params.pipe(map(p => p.id));
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.groupService.getGroupById(+params.get(`id`)).subscribe(
          data => {
            console.table(data);
            this.group = data;
          },
          err => {
            console.error(err);
          }
        )
         
      }
    )


  }

}
