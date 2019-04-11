import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
private peopleService:PeopleService;
people:Person[]=[];

  constructor(peopleService:PeopleService) {
    this.peopleService=peopleService;
    this.people=peopleService.getAll();
   }

  ngOnInit() {
  }

}
