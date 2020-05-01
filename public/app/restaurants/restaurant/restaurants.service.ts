import { Component, OnInit, Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantsService implements OnInit {



  constructor(private http: Http) { }

  ngOnInit() {
    
  }

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
  }

}
