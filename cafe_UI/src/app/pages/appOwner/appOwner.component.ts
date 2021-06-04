import { Component, OnInit } from '@angular/core';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

declare var $:any;

@Component({
  selector: 'app-appOwner',
  templateUrl: './appOwner.component.html',
  styleUrls: ['./appOwner.component.css']
})
export class AppOwnerComponent implements OnInit {
  location: Location;
  
  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit() {
    $.getScript('../../../assets/js/material-dashboard.js');
    $.getScript('../../../assets/js/initMenu.js');
  }

  isMaps(path){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );

    if(path == titlee){
      return false;
    }
    else {
      return true;
    }
  }

}
