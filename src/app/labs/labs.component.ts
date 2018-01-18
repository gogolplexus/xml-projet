import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LABS } from './labs-data';
import { MapsAPILoader, LatLngBoundsLiteral } from '@agm/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {
  init_lat;
  init_lng;
  latlngbounds;

  //labs_data = LABS;
  labs;
  cpt_teams;

  constructor(private router:Router, private _LABS: LABS,private mapsAPILoader:MapsAPILoader) {
  }

  ngOnInit() {
    this.feedback();
    this.getLabs();
    //this.getTeamPerLabs();
  }

  calculateLatLngBounds() {
    let west = this.labs[0].adressegeographique.longitude;
    let north = this.labs[0].adressegeographique.latitude;
    let south = this.labs[0].adressegeographique.latitude;
    let east = this.labs[0].adressegeographique.longitude;

    for(var i = 0; i<this.labs.length; i++ ) {
      if((this.labs[i].adressegeographique.longitude != 0) && (this.labs[i].adressegeographique.latitude != 0)) {
        if(west > this.labs[i].adressegeographique.longitude) {
          west = this.labs[i].adressegeographique.longitude;
        }
  
        if(east < this.labs[i].adressegeographique.longitude) {
          east = this.labs[i].adressegeographique.longitude;
        }
  
        if(north < this.labs[i].adressegeographique.latitude) {
          north = this.labs[i].adressegeographique.latitude;
        }
  
        if(south > this.labs[i].adressegeographique.latitude) {
          south = this.labs[i].adressegeographique.latitude;
        }
      }
    }

    this.init_lat = (north + south) / 2;
    this.init_lng = (west + east) / 2;

    let offset = 0.2;
    this.latlngbounds = <LatLngBoundsLiteral>{west: west - offset, north: north + offset, south: south - offset, east: east + offset};
  }

  getLabs() {
    this._LABS.getLabs().subscribe(
      data => this.labs = data,
      err => console.error(err),
      () => {
        var spinner = document.getElementsByClassName("spinner");
        spinner[0].outerHTML = "";
        this.labs = this.labs.cr,
        this.calculateLatLngBounds();
      }
    );
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
