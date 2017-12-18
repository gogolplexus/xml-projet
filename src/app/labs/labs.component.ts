import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LABS } from './labs-data';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {
  init_lat;
  init_lng;

  labs;

  constructor(private router:Router) {
    this.labs = LABS;
    this.init_lat = this.labs[0].lat;
    this.init_lng = this.labs[0].lng;
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
