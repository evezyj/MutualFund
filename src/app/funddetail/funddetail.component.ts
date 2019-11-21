import { Component, OnInit } from '@angular/core';
import { SearchResp } from 'src/model/search/SearchResp';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funddetail',
  templateUrl: './funddetail.component.html',
  styleUrls: ['./funddetail.component.css']
})
export class FunddetailComponent implements OnInit {

  dataList: SearchResp;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSearchResp();
  }

  getSearchResp(){
    this.http.get('http://localhost:8100/search').subscribe((res:SearchResp)=>{
      this.dataList = res;
    });
  }

}
