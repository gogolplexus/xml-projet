import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
const headers = new HttpHeaders();
//headers.set('Content-Type','application/json');
/* headers.set('Access-Control-Allow-Headers','application/json');
headers.set('Access-Control-Allow-Methods','GET, POST, OPTIONS');
headers.set('Access-Control-Allow-Origin','*'); */
 
@Injectable()
export class LABS {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getLabs() {
        return this.http.get('http://91.134.122.212:9991/listCenter');
    }
}



/* export const LABS: {} = [
    {name: "Labo 1", nb_team: 4, nb_perso: 4, fermeture: "Oui", lat: 51.678418, lng: 7.809007},
    {name: "Labo 2", nb_team: 3, nb_perso: 3, fermeture: "Non", lat: 41.678418, lng: 6.809007},
    {name: "Labo 3", nb_team: 6, nb_perso: 9, fermeture: "Oui", lat: 31.678418, lng: 5.809007},
    {name: "Labo 4", nb_team: 7, nb_perso: 9, fermeture: "Non", lat: 21.678418, lng: 4.809007},
    {name: "Labo 5", nb_team: 2, nb_perso: 6, fermeture: "Oui", lat: 11.678418, lng: 3.809007}
]; */