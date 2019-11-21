import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HoldingResp } from 'src/model/holding/HoldingResp';

@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.css']
})
export class BuyComponentComponent implements OnInit {

  holdingResp:HoldingResp;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHoldingResp();
  }

  getHoldingResp(){
    this.http.get('http://localhost:8100/holding').subscribe((res:HoldingResp)=>{
      this.holdingResp = res;
    });
  }

}
