import { Fund } from "./Fund";

export class HoldingDetails{
    orderReferenceNumber:string;
    customerNo:string;
    accountNo:string;
    quantity:any;
    originalPrice:any;
    lastModifiedTime:string;
    fund:Fund;

}