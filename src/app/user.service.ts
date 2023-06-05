import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from './items.model';
import { User } from './user.model';
import { UserAuth } from './userAuth.model';
import { CartItems } from './cartItems.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

// registeruser(user:User){
//   return this.http.post<User>('http://localhost:1234/user/reg',user);
// }

// login(userAuth:UserAuth){
//   return this.http.post<User>('http://localhost:1234/user/login',userAuth);
// }
  registeruser(user:User){
    return this.http.post<User>('https://anubhav-shop-anubhav-user-entry.azuremicroservices.io:443/user/reg/',user);
  }

  login(userAuth:UserAuth){
    return this.http.post<User>('https://anubhav-shop-anubhav-user-entry.azuremicroservices.io/user/login/',userAuth);
  }

  adminAddItem(item:Items){
    return this.http.post<Items>(`https://anubhav-shop-item-entry.azuremicroservices.io:443/item/add/`,item);
  }


  // // defaultTest(){
  // //   return this.http.get<String>('https://anubhav-shop-item-entry.azuremicroservices.io/item/see')
  // // }
  // defaultTesttest(){
  //   return this.http.get<any>('http://localhost:1236/item/see');
  // }


  getAllItems(){
    return this.http.get<Items[]>(`https://anubhav-shop-item-entry.azuremicroservices.io:443/item/`);
  }

  addToCart(cartItem:CartItems){
    return this.http.post<Items>(`https://anubhav-shop-cart-entry.azuremicroservices.io/cart/saveitem`,cartItem);
  }

  getMyCartList(emailid:string){
    return this.http.get<CartItems[]>(`https://anubhav-shop-cart-entry.azuremicroservices.io/cart/${emailid}`);
  }




}
