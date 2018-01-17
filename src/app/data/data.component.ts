import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi, listCenter, personneParDomaineDeRecherche } from './data';
import { STATS } from './stats_data';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  //Liste des labos
  labs;

  //Liste des équipes
  teams = [];

  constructor(private router:Router, private _STATS: STATS) {
    Object.assign(this, {single, multi, listCenter, personneParDomaineDeRecherche})  
  }

  single: any[];
  multi: any[];
  listCenter: any[];
  personneParDomaineDeRecherche: any[];

  view: any[] = [700, 400];

  // options
  showLegend = false;
  showLegendDomaine = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabelDomaine = "";

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
    //this.getTeams();
  }

  //Test de la récupération de listCenter
  getLabs() {
    this._STATS.getLabs().subscribe(
      data => this.labs = data,
      err => console.error(err),
      () => {
        this.labs = this.labs.cr;
        var data = this.getTeams();
        /*var respoParCentre = [];

        for(var i = 0; i<this.labs.length; i++){
          respoParCentre.push({"name":this.labs[i].adressegeographique.libelle, "value":this.labs[i].responsable.length});
        }*/
        //this.labs = respoParCentre;
      }
    );
  }

  getTeams() {
    var index = 0;
    var nbreEquipeParCentre = [];
    var previousValue = 0;
    this.labs.forEach(elt => {
      this._STATS.getTeams(elt.adressegeographique.cri.siid).subscribe(
        data => this.teams = this.teams.concat(data),
        //data => this.teams = data,
        err => console.error(err),
        () => {
          //console.log("personneParDomaine: ", this.teams);
          var personneParDomaine = personneParDomaineDeRecherche;
          var indexDomaine = ["Digital Health, Biology and Earth", "Perception, Cognition and Interaction", "Applied Mathematics, Computation and Simulation", "Networks, Systems and Services, Distributed Computing", "Algorithmics, Programming, Software and Architecture"];
           
          nbreEquipeParCentre.push({"name":elt.adressegeographique.libelle, "value":(this.teams.length - previousValue)});

          for(var j = 0; j<this.teams.length; j++){
            if(this.teams[j].domaineDeRecherche != undefined){
              switch(this.teams[j].adressegeographique.cri.siid){
                case "CR0001I": personneParDomaine[0].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0002O": personneParDomaine[1].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0003O": personneParDomaine[2].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0004Z": personneParDomaine[3].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0005N": personneParDomaine[4].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0008I": personneParDomaine[5].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0007B": personneParDomaine[6].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                case "CR0006Z": personneParDomaine[7].series[indexDomaine.indexOf(this.teams[j].domaineDeRecherche)].value++; break;
                default:;
              }
            }
          }
          if(index == this.labs.length-1){
            this.teams = personneParDomaine;
            this.labs = nbreEquipeParCentre;
          }
          previousValue = this.teams.length;
          index++;
        }
      );
    });
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
