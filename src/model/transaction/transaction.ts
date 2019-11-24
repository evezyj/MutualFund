import { Fund } from "../holding/Fund"

export class Transaction {
    accountNo: string;
    customerNo: string;
    fund: Fund;
    lastModifiedTime: String;
    orderReferenceNumber: any;
    originalPrice: any;
    quantity: any;

}