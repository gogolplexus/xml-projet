import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TEAMS } from './team-data';
import { LABS } from '../labs/labs-data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  //Modal et contenu du modal
  selectedTeam;
  selectedTeamName;
  opened = false;
  loading = false;

  //Liste des labos
  labs;

  //Liste des équipes
  teams = [];

  //Gestion des filtres
  filter_lab;
  isFilter = {
    'lab_name': false,
    'domain': false
  };

  constructor(private router:Router, private _LABS: LABS, private _TEAMS: TEAMS) {}

  ngOnInit() {
    this.feedback();
    this.getLabs();
    //this.getTeams();
  }

  getTeams() {
    for(var i = 0; i<this.labs.length; i++) {
      this._TEAMS.getTeams(this.labs[i].adressegeographique.cri.siid).subscribe(
        data => this.teams = this.teams.concat(data),
        err => console.error(err),
        () => {
          //console.log(this.teams);
        }
      );
    }
  }

  getLabs() {
    this._LABS.getLabs().subscribe(
      data => this.labs = data,
      err => console.error(err),
      () => {
        this.labs = this.labs.cr,
        this.getTeams();
        var spinner = document.getElementsByClassName("spinner");
        spinner[0].outerHTML = "";
      }
    );
  }

  selectLab(data) {
    this.filter_lab = {
      id: data.adressegeographique.cri.siid,
      name: data.adressegeographique.libelle
    }
    this.isFilter['lab_name'] = true;
    //console.log(this.filter_lab);
  }

  onCloseLab() {
    this.isFilter['lab_name'] = false;
    this.filter_lab = {};
    //console.log(this.isFilter);
  }

  showModal(team) {
    this.loading = true;
    this.selectedTeamName = team.sigle.toLowerCase();
    this._TEAMS.getTeamMembers(this.selectedTeamName).subscribe(
      data => this.selectedTeam = data,
      err => console.error(err),
      () => {
        //console.log(this.selectedTeam);
        this.selectedTeamName = this.selectedTeamName.toUpperCase();
        this.opened = true;
        this.loading = false;
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
