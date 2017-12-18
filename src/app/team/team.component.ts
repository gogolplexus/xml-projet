import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LABS, TEAMS } from './team-data'
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  // make fade in animation available to this component
  //animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  //host: { '[@fadeInAnimation]': '' }
})
export class TeamComponent implements OnInit {
  labs;
  teams;

  constructor(private router:Router) {
    this.labs = LABS;
    this.teams = TEAMS;
  }

  ngOnInit() {
    this.feedback();
  }

  feedback() {
    let currentUrl = this.router.url; /// this will give you current url
    let menu_list = document.getElementsByClassName('nav-link');
    for (let index = 0; index < menu_list.length; index++) {
      if(currentUrl == menu_list[index].getAttribute("routerLink")) {
        menu_list[index].className = 'active nav-link nav-text';
      } else {
        menu_list[index].className = 'nav-link nav-text';
      }
    }
  }

}
