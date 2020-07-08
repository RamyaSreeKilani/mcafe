import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MenuAPIsService {

cartUpdate:any;

constructor(private http: HttpClient) { }

getAllItems(): Observable<any>{
  return this.http.get('http://localhost:8000/itemList/' + 'all');
}
getItembyTitle(itemName): Observable<any>{
  console.log("itemName -->",itemName)
  return this.http.get<any>('http://localhost:8000/itemList/getByItemTitle?title=' + itemName);
}


getItembyContent(itemName): Observable<any>{
  console.log("itemName -->",itemName)
  return this.http.get<any>('http://localhost:8000/itemList/getByItemContent?title=' + itemName);
}


postMenuList(menu){
  return this.http.post<any>('http://localhost:8000/itemList/addMenu', menu);
}
updateMenuList(itemId){
  return this.http.put<any>('http://localhost:8000/itemList?itemId='+itemId, itemId);
}
getItemByDiet(dietType): Observable<any>{
  return this.http.get<any>('http://localhost:8000/itemList/getByDietType?dietTyp=' + dietType);
}
userFavourites(){
  return this.http.get('http://localhost:8000/itemList/' + 'allFav')
}
postFilters(body){
  return this.http.post<any>('http://localhost:8000/itemList/getByFilterData',body);
}
getCredentials(userName,password):Observable<any>{
  console.log(`http://localhost:8000/itemList/${userName}/${password}`);
  return this.http.get<any>(`http://localhost:8000/itemList/${userName}/${password}`);
}
addToCart(cartList){
  return this.http.post('http://localhost:8000/itemList/cartItems', cartList);
}
getCartList(empId): Observable<any>{
  return this.http.get('http://localhost:8000/itemList/allCart?empId=' + empId);
}
 updateCartList(data){
  return this.http.put('http://localhost:8000/itemList/updateCart/',data);
 }
updateLikes(likes){
  return this.http.put('http://localhost:8000/itemList/updateLikes',likes);
}

update(data,name)
{
  console.log("req :",data);
  console.log("name: ",name);
  return this.http.put(`http://localhost:8000/itemList/${name}`,data);
}


}
