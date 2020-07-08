import { MenuAPIsService } from './../../serviceANDmodel/menu-apis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catlog',
  templateUrl: './catlog.page.html',
  styleUrls: ['./catlog.page.scss'],
})
export class CatlogPage implements OnInit {
  item: any;
itemsnumber:any = 1;
  orderPoints: any;
  allCartItems: any[];
  constructor(private menuService :MenuAPIsService) { }

  ngOnInit() {
this.item = JSON.parse(sessionStorage.getItem('SelectedItem'));
this.orderPoints
this.getCartsList();
      }
      add(){
this.itemsnumber=this.itemsnumber+1;
      }

      getCartsList(){
        this.allCartItems=[];
        this.menuService.getCartList("20").subscribe((res)=> {                                    //get the all records from service
        this.allCartItems=res;
        console.log("catlog response", res);
                                                                                //assign the response to the allRecords array in service
      })
      }





      remove(){
      if(this.itemsnumber>0){
this.itemsnumber=this.itemsnumber-1;
      }
      }
}
