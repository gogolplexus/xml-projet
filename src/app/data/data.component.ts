import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { STATS } from './stats_data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data = STATS;
  labs;
  listingCenter = [];

  constructor(private router:Router, private _STATS: STATS) {}

  view: any[] = [700, 400];

  // options
  showLegend = false;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme = {
    domain: ['#5AA454', '#f0ad4e', '#C7B42C', '#AAAAAA', '#d9534f', '#5bc0de', '#5cb85c', '#428bca']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  
  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.feedback();
    this.getLabs();
  }

  //Récupération de la liste des labos
  getLabs() {
    this._STATS.getLabs().subscribe(
      data => this.labs = data,
      err => console.error(err),
      () => {
        this.labs = this.labs.cr
        this.formatDataLabs(this.labs)
        console.log(this.listingCenter)
      }
    );
  }

  //Formatage données labos pour graphs
  formatDataLabs(data) {
    for(var i = 0; i < data.length ; i++) {
      this.listingCenter = this.listingCenter.concat(
        {"name": data[i].libelle, "value": data[i].responsable.length}
      );
    }
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
