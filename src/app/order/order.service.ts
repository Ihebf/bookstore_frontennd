import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) { }


  createOrderItem(id: number, userName: string) : Observable<any> {
    return this.http.post(
      this.orderUrl+"orderItems/add/book/"+id+"/user/"+userName,
      null,
      { responseType: 'text' }
      )
  }

  getAllItems(userName: string) : Observable<any>{
    return this.http.get(this.orderUrl+"order/items/"+userName);
  }

  getTotalPrice(userName: string) : Observable<number> {
    return this.http.get<number>(this.orderUrl+"order/totalPrice/"+userName);
  }

  deleteItem(id: number):Observable<any> {
    return this.http.delete(this.orderUrl+"orderItems/delete/"+id);
  }
}
