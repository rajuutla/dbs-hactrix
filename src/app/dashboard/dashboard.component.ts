import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../service/fetch-data.service';
import { EntryFrom } from '../Shared/EntryFrom';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    'style': 'display: block;'
  },
})
export class DashboardComponent implements OnInit {

  allEntries: EntryFrom[];

  constructor(private fetdata: FetchDataService,private spinnerService: Ng4LoadingSpinnerService) {
    this.getData();
   }

  ngOnInit() {
    // this.getData();
  }

  getData() {
    console.log("getdata called");
    this.spinnerService.show();
    this.fetdata.getData()
      .subscribe(res => {
        this.allEntries = res.data;
        console.log("All Entries", this.allEntries);
        this.spinnerService.hide();
      })
  }



}
