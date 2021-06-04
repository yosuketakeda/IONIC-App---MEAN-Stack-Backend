import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


//import { AlertService, AuthenticationService } from '../../_services/index';

import { Customer, TotalCafes } from '../../_models/index';

import { TotalCafesService, UserService } from '../../_services/index';

declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //cafesArray: TotalCafes;
  cafes: TotalCafes[];
  customers: Customer[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private totalCafesService: TotalCafesService,
    private userService: UserService
  ){}

  ngOnInit() {
  //  this.totalCafesService.getByCafe(localStorage.getItem('currentUser')).subscribe(cafes => { this.cafes = cafes; });
    this.userService.getByCustomer().subscribe(customers => { this.customers = customers; });

    require('../../../../assets/js/charts.js')();
    //this.totalCafesService.getAll().subscribe(cafes => { this.cafes = cafes; });
  }
}
