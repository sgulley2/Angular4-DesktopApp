import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';


export interface OrderDetail {
    reico_sku: string;
    quantity: number;
}

export interface OrderHeader {
    customer_number: string;
    customer_name: string;
    order_key: string;
    status: string;
    po_number: string;
    ordered_by: string;
    transaction_timestamp: string;
    order_details: OrderDetail[];
}

export interface OnlineSales {
    order_headers: OrderHeader[];
}


@Injectable()
export class OnlineSalesService {
    SERVER = 'http://salesforce-dev03.reico.com/';

    constructor(private _http: HttpClient) {}

    getOnlineSales(): Observable<any> {
        return this._http.get(this.SERVER + 'online_orders/online_sales_api');
    }
}
