import { Component, OnInit } from '@angular/core';
import { GetscoutslistService } from '../services/getscoutslist.service';
import {Scout} from '../interfaces/scout';

@Component({
  selector: 'app-scoutslist',
  templateUrl: './scoutslist.component.html',
  styleUrls: ['./scoutslist.component.css']
})
export class ScoutslistComponent implements OnInit {
  scoutsList: Scout[];

  constructor(private getscoutslistservice: GetscoutslistService) {}

  getScouts(){
    this.getscoutslistservice.getScouts()
      .subscribe((data: Scout[]) => this.scoutsList = data)
  }

  ngOnInit(): void {
    this.getScouts()
  }



}
