import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 //////////////// Serve host ////////
import { appConfig } from '../app.config';
 ///////////////
import { User, Customer } from '../_models/index';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/register', user);
    }

    update(user: User) {
        return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }


    getByCustomer() {
      return this.http.get<Customer[]>(appConfig.apiUrl + '/customers');
  }
}
