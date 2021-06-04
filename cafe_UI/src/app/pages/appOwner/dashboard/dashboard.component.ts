import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


//import { AlertService, AuthenticationService } from '../../_services/index';

import { TotalCafes } from '../../_models/index';
import { TotalCafesService } from '../../_services/index';

declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cafesArray: TotalCafes;
  cafes: TotalCafes[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private totalCafesService: TotalCafesService,
  ){}

  ngOnInit() {
    require('../../../../assets/js/charts.js')();

    this.totalCafesService.getAll().subscribe(cafes => { this.cafes = cafes; });
  }

}
