import { Router } from "@angular/router";
import { MenuAPIsService } from "./../../serviceANDmodel/menu-apis.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.page.html",
  styleUrls: ["./filters.page.scss"],
})
export class FiltersPage implements OnInit {
  itemsList: any;
  menuFilter: any = [];
  dietValue: any = "Veg";
  isFav = false;
  isChecked;
  mealCheck = false;
  menus = [
    { type: "Breakfast", isChecked: false },
    { type: "Lunch", isChecked: false },
    { type: "Dinner", isChecked: false },
    { type: "Snack", isChecked: false },
    { type: "Drink", isChecked: false },
  ];

  constructor(private route: Router) {}

  ngOnInit() {
    var favValue = sessionStorage.getItem("isFav") || "false";
  //  console.log(favValue);
    if (favValue == "true") {
      this.isFav = true;
    } else {
      sessionStorage.setItem("isFav", "false");
      this.isFav = false;
    }
    var mealValue = sessionStorage.getItem("mealCheck") || "false";
  //  console.log(mealValue);
    if (mealValue == "true") {
      this.mealCheck = true;
    } else {
      sessionStorage.setItem("mealCheck", "false");
      this.mealCheck = false;
    }

this.dietValue=JSON.parse(sessionStorage.getItem('dietFilter'));

    this.isMealTypeChecked();
  }
  favBox(event) {
    this.isFav = !this.isFav;
    if (this.isFav) {
      sessionStorage.setItem("isFav", "true");
    } else {
      sessionStorage.setItem("isFav", "false");
    }
  }

  isMealTypeChecked(){
    var menuFilter =JSON.parse(sessionStorage.getItem('menuFilter')) || []
    for(let i=0;i<menuFilter.length;i++){
    this.menus.forEach(element => {
      if(element.type==menuFilter[i]){
        element.isChecked=true;
      }
    });
    }
  }



  filter() {
  //  console.log(this.menuFilter);
    sessionStorage.setItem("menuFilter", JSON.stringify(this.menuFilter));
    sessionStorage.setItem("dietFilter", JSON.stringify(this.dietValue));
    this.route.navigateByUrl("/home");
  }
  addFilter() {
    this.menuFilter = [];
  //  console.log(this.menus);

    this.menus.forEach((element,i) => {
      if (element.isChecked) {
        this.menuFilter.push(element.type);
        this.mealCheck = !this.isFav;
        if (this.mealCheck) {
          sessionStorage.setItem("mealCheck", "true");
        } else {
          sessionStorage.setItem("mealCheck", "false");
        }
      }
    });
  }
  dietType(type) {
    this.dietValue = type;
  }
}
