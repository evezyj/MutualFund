import { Component, OnInit } from '@angular/core';
import { SearchResp } from 'src/model/search/SearchResp';
import { HttpClient } from '@angular/common/http';
import { FundHouse } from 'src/model/holding/FundHouse';
import { HoldingDetails } from 'src/model/holding/HoldingDetails';
import { Fund } from 'src/model/holding/Fund';

@Component({
  selector: 'app-funddetail',
  templateUrl: './funddetail.component.html',
  styleUrls: ['./funddetail.component.css']
})
export class FunddetailComponent implements OnInit {

  resp: SearchResp;
  dataList: Array<Fund> = new Array<Fund>();;
  fundhouses: Array<FundHouse> = new Array<FundHouse>();;
  filterFundHouse: Array<FundHouse> = new Array<FundHouse>();;
  companys: Array<FundHouse> = new Array<FundHouse>();;
  types: Array<Fund> = new Array<Fund>();;
  fundhouse: string;
  fundtypes: Array<Fund>;
  filtertypes: Array<Fund>;

  funds: Array<Fund> = new Array<Fund>();
  fundnames: Array<Fund> = new Array<Fund>();;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSearchResp();
  }

  getSearchResp() {

    this.http.get('http://localhost:8100/search').subscribe((res: SearchResp) => {
      this.dataList = res.data;
      //const companys = [];
      this.dataList.forEach(element => {
        if (this.companys.length == 0) {
          this.companys.push(element.fundHouse);
          this.funds.push(element);
        }
        let flag = false;
        for (var i = 0; i < this.companys.length; i++) {
          if (this.companys[i].code != element.fundHouse.code) {
            flag = true;
          } else {
            flag = false;
          }
        }
        if (flag) {
          this.companys.push(element.fundHouse);
          this.funds.push(element);
        }
      });
      console.log("funds:" + this.funds.length, "companys:" + this.companys.length);
    });

  }
  changeType(fundcode) {
    let fundhousel = this.fundhouse;
    this.filtertypes = [];
    this.dataList.forEach(element => {
      if (element.fundHouse.code === fundcode) {
        this.types.push(element);
      }
      let flag = false;
      for (var i = 0; i < this.types.length; i++) {
        if (this.types[i].fundType != element.fundType) {
          flag = true;
        } else {
          flag = false;
        }
      }
      if (flag) {
        this.filtertypes.push(element);
      }
    });
    this.fundtypes = new Array<Fund>();
    this.filterType(this.filtertypes);
  }

  filterType(data: Array<Fund>) {
    this.fundtypes.push(data[0]);
    let flagtype = false;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < this.fundtypes.length; j++) {
        if (data[i].fundType == this.fundtypes[j].fundType) {
          flagtype = false;
        } else {
          flagtype = true;
        }
      }
      if (flagtype) {
        this.fundtypes.push(data[i]);
      }
    }
  }


  displayFund(data: Fund) {
    console.log('display:' + data);
    this.fundnames = new Array<Fund>();
    for (var j = 0; j < this.funds.length; j++) {
      console.log("data.fundType:" + data.fundType + ",this.funds[j].fundType ：" + this.funds[j].fundType + "，data.fundHouse.name：" + data.fundHouse.name + ",this.funds[j].fundHouse.name：" + this.funds[j].fundHouse.name);
      if (data.fundType == this.funds[j].fundType && data.fundHouse.name == this.funds[j].fundHouse.name) {
        this.fundnames.push(this.funds[j]);
      }
    }
    console.log(this.fundnames.length);
  }

  selectFund(code: string) {
    console.log("this.fundnames.length:" + code);
    let fund = null;
    for (var j = 0; j < this.dataList.length; j++) {
      console.log("fund:" + code + " " + this.dataList[j].code);
      if (code == this.dataList[j].code) {
        fund = this.dataList[j];
        break;
      }
    }
    console.log("fund:" + fund);
    this.displayFund(fund);
    console.log("fund:" + fund);
  }

}
