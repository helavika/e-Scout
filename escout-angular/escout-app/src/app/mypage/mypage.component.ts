import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Scout} from '../interfaces/scout';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  scout: Scout;
  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.scout = this.appComponent.loggedScout;
  }

}
