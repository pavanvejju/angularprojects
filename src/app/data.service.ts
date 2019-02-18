import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "@angular/http";
import { UserDetailsResponse } from "./models/response/user-response";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";


@Injectable()
export class DataService {

  private webPath = "https://api.github.com/repositories/19438/commits";//environment.webPath;
  httpHeaders: HttpHeaders;
  token = '';

	//private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  //			goal = this.goals.asObservable();

  //constructor() { }

  constructor(private http: HttpClient) {
    this.token = "dfasd";
}

/*
  changeGoal(goal) {
    this.goals.next(goal)
  }
*/

  setHttpParams() {
    let headerJson = {
        'authenticationtoken': this.token,
        'Content-Type': 'application/json'
    }
    this.httpHeaders = new HttpHeaders(headerJson);
 }
  fetchUserbyID(userId: number, programid: number): Observable<any> {
    let headers = {
        'authenticationtoken': this.token,
        'Content-Type': 'application/json',
        'programid': programid + '',
        'channel': '1'
    }
    return this.http.get<any>(this.webPath , { headers: new HttpHeaders(headers) });
  }

  fetchUserbyID1() {
    
    return this.http.get(this.webPath);
  }

  cardStatusChangeCsr(cardStatusChangeRequest): Observable<any> {
    this.setHttpParams();
    let options = { headers: this.httpHeaders };
    return this.http.post<any>(this.webPath + 'users/', cardStatusChangeRequest, options);
  }
}
