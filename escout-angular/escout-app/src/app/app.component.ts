import { Component } from '@angular/core';
import {Scout} from './interfaces/scout';
import {Achievement} from './interfaces/achievement';
import {Chat} from './interfaces/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escout-app';
  loggedScout: Scout;
}
