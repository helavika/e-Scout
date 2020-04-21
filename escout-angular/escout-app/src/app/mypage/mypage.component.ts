import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Scout} from '../interfaces/scout';
import {Achievement} from '../interfaces/achievement';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: [
    './mypage.component.css',
    '../app.component.css',
  ]
})

export class MypageComponent implements OnInit {

  scout: Scout;
  achievements: Achievement[];
  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.scout = this.appComponent.loggedScout;
  }

}
