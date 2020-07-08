import { element } from 'protractor';
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MenuAPIsService } from "../serviceANDmodel/menu-apis.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  allFoodItems: any;
  items: any;
  itemsList: any;
  likes = 0;
  itemName: any;
  byTitle: String = "";
  menuFilter:any=[];
  dietFilter:any='';
  isFav:false;
  dietValue: any;
  tfs:any;



  userDetails:any=JSON.parse(sessionStorage.getItem('signedUser')) || {};
  allCartItems: any=[];


  constructor(public menuService: MenuAPIsService, private router: Router, private route:ActivatedRoute) {

    console.log(this.userDetails);

   route.params.subscribe(val=>{
    this.getCartsList()
      this.menuFilter=JSON.parse(sessionStorage.getItem('menuFilter')) || [];
      this.dietFilter=JSON.parse(sessionStorage.getItem('dietFilter')) || '';
      this.userDetails=JSON.parse(sessionStorage.getItem('signedUser')) || {};
      //console.log(sessionStorage.getItem('signedUser'));

      if(this.menuFilter.length || this.dietFilter!= '' || this.userDetails!= {}){
        var request={
          mealType:this.menuFilter,
          dietType:this.dietFilter,
          isFav:sessionStorage.getItem('isFav'),
          userName:this.userDetails.username

        }
//console.log(this.userDetails[0].username);
//console.log(request);

        this.menuService.postFilters(request).subscribe((res)=>{
  //        console.log('response',res);
          this.itemsList = res;
        });
      }
      else{
        this.getAllMenuItems();
      }
    })
  }

  ngOnInit(){
    this.getCartsList()
  }

  getAllMenuItems() {
      this.menuService.getAllItems().subscribe((data: {}) => {
      //console.log(data);
      this.itemsList = data;
      //console.log(this.itemsList);
      this.allFoodItems = this.itemsList;
      //console.log('Check',this.allFoodItems);
      this.menuFilter=JSON.parse(sessionStorage.getItem('menuFilter'));
      this.dietFilter=JSON.parse(sessionStorage.getItem('dietFilter'));
      if(this.menuFilter!=null){
        let menuData=[];
        console.log(this.menuFilter);
        this.itemsList.forEach(element => {
         if(this.menuFilter.includes(element.mealType)){
         menuData.push(element);
         }
        });
    //    console.log(menuData);
        this.itemsList=menuData;
      }
    });
  }


  getCartsList() {
    this.menuService.getCartList("20").subscribe((res) => {
  //    console.log("cartResponse",res);
     if(res){ this.allCartItems = res.cartArray; }
 //     console.log("catlog response", res);
    });
  }

  getItemsByTitle(title) {
   // const regexp = new RegExp(this.tfs, 'i');
   if(title.length>2){
      this.menuService.getItembyTitle(title).subscribe((data: {}) => {
   //   console.log(data);
      this.itemsList = data;
        });

   }
    //  return this.itemsList.filter(x => regexp.test(x.title));

  }

  description(item) {
    sessionStorage.setItem('SelectedItem',JSON.stringify(item));
    this.router.navigateByUrl("/item-description");
  }
  getStatus(data) {
    switch (data) {
      case 'Veg':
        return 'green';
      case 'Non veg':
        return 'red';
    }
  }
}
