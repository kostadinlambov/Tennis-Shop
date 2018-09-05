import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../models/order.model';

const baseUrl = 'https://tennisshop.herokuapp.com/orders/';


@Injectable()
export class OrderService {

    private currentAuthtoken: string;
    constructor(private http: HttpClient) { }

    placeOrder(payload) {
        return this.http.post(baseUrl + 'order', payload);
    }

    loadOrders(id) {
       return this.http.get<OrderModel[]>(baseUrl + `all/${id}`);
    }

    checkout(id) {
        return this.http.post(baseUrl + 'checkout?id=' + id, id);
    }

    removeOrder(id) {
        return this.http.post(baseUrl + 'remove?id=' + id, id);
    }
    
    saveChanges(payload){
        return this.http.put(baseUrl + `edit`, payload);
    }

}
