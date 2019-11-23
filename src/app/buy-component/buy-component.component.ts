import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HoldingResp } from 'src/model/holding/HoldingResp';
import { HoldingDetails } from 'src/model/holding/HoldingDetails';

@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css']
})
export class BuyComponentComponent implements OnInit {

  holdingResp: HoldingResp;
  data: Array<HoldingDetails>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHoldingResp();
  }

  getHoldingResp() {
    this.http.get('http://localhost:8100/holding').subscribe((res: HoldingResp) => {
      this.data = res.data;
    });
  }

}
