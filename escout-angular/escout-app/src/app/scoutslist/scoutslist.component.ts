import { Component, OnInit } from '@angular/core';

import { GetscoutslistService } from '../services/getscoutslist.service';
import {log} from 'util';

@Component({
  selector: 'app-scoutslist',
  templateUrl: './scoutslist.component.html',
  styleUrls: ['./scoutslist.component.css']
})
export class ScoutslistComponent implements OnInit {

  scoutsList;
  constructor(private getscoutslistservice: GetscoutslistService) {
    this.scoutsList = this.getscoutslistservice.getScouts();
    log(this.scoutsList)
  }

  ngOnInit(): void {
  }



}
