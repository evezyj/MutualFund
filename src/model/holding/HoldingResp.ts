import { HoldingDetails } from "./HoldingDetails";

export class HoldingResp {
    responseCode: any;
    data: Array<HoldingDetails>;
    errorCode: any;
    errorMsg: any;
}