import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TotalCafes } from '../../_models/index';
import { TotalCafesService } from '../../_services/index';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  cafesArray: TotalCafes;
  cafes: TotalCafes[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private totalCafesService: TotalCafesService,
  ){}

  ngOnInit() {
    this.totalCafesService.getAll().subscribe(cafes => { this.cafes = cafes; });
  }

  tenCustomers(user){
    //alert(JSON.stringify(user));
  }

}
