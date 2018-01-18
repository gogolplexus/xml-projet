import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 
const headers = new HttpHeaders();
//headers.set('Content-Type','application/json');
/* headers.set('Access-Control-Allow-Headers','application/json');
headers.set('Access-Control-Allow-Methods','GET, POST, OPTIONS');
headers.set('Access-Control-Allow-Origin','*'); */
 
@Injectable()
export class PUBLICATIONS {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getPublications(id) {
        return this.http.get('http://91.134.122.212:9991/getPublicationOfPerson?key='+id);
    }
}