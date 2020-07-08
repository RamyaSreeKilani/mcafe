import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FooditemsService {

  constructor(private http:HttpClient) { }


  getData()
  {
      return this.http.get('assets/list/monday.json');

  }

  authentication(user,password)
  {
    return this.http.get(`http://localhost:8080/user/get/
${user}/${password}`);
  }
}


