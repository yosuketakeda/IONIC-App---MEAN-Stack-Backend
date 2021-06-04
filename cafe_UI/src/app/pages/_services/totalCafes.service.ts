import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 //////////////// Serve host ////////
import { appConfig } from '../app.config';
 ///////////////
import {Customer, TotalCafes } from '../_models/index';


@Injectable()
export class TotalCafesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<TotalCafes[]>(appConfig.apiUrl + '/users');
    }
    getByCafe(cuser) {
        return this.http.get<TotalCafes[]>(appConfig.apiUrl + '/users/' + cuser._id);
    }

    getByCustomer() {
        return this.http.get<Customer[]>(appConfig.apiUrl + '/customers');
    }
}
