import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TotalCafes } from '../../_models/index';
import { TotalCafesService } from '../../_services/index';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    //cafesArray: TotalCafes;
    cafes: TotalCafes[] ;
    //cafes: any;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private totalCafesService: TotalCafesService,
    ){}

    ngOnInit() {
      this.totalCafesService.getByCafe(localStorage.getItem('currentUser')).subscribe(cafes => { this.cafes = cafes; });
    }

  }
