import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PUBLICATIONS } from './publi-data';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  public id: string;
  public name: string;
  public havePub: boolean;
  public publi;
  public isLoadFinish: boolean = false;

  constructor(private route: ActivatedRoute, private _PUBLICATIONS: PUBLICATIONS) {}
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPublications();
  }

  getPublications() {
    this._PUBLICATIONS.getPublications(this.id).subscribe(
      data => this.publi = data,
      err => console.error(err),
      () => {
        this.publi = this.publi.publications;
        //console.log(this.publi);
        if(this.publi.length == 0) {
          this.name = "undefined";
          this.havePub = false;
          this.isLoadFinish = true;
        } else {
          this.havePub = true;
          this.isLoadFinish = true;
          //this.convertObjectToArray();
          this.getPubName(this.publi[0].biblStruct.analytic.author.persName);
        }
      }
    );
  }

  convertObjectToArray() {
    for(let i = 0; i < this.publi.length; i++) {
      this.publi[i].biblStruct.analytic.author.persName = [this.publi[i].biblStruct.analytic.author.persName];
    }
  }

  getPubName(authors) {
    for(var i = 0; i < authors.length; i++) {
      if(authors[i].key == this.id) {
        this.name = authors[i].foreName + " " + authors[i].surname;
      }
    }
  }
}
