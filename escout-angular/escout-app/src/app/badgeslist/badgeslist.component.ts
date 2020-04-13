import { Component, OnInit } from '@angular/core';
import { Achievement } from '../interfaces/achievement';
import { BadgesService} from '../services/badges.service';
import {Scout} from '../interfaces/scout';

@Component({
  selector: 'app-badgeslist',
  templateUrl: './badgeslist.component.html',
  styleUrls: [
    '../app.component.css',
    './badgeslist.component.css'
  ]
})
export class BadgeslistComponent implements OnInit {

  achievementslist: Achievement[];

  constructor(private badgeslistservice: BadgesService) { }

  getBadges(){
    this.badgeslistservice.getBadges()
      .subscribe((data: Achievement[]) => this.achievementslist = data);
  }

  ngOnInit(): void {
    this.getBadges();
  }

}
