import { MenuAPIsService } from "./../../serviceANDmodel/menu-apis.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.page.html",
  styleUrls: ["./logout.page.scss"],
})
export class LogoutPage implements OnInit {
  items: any = [];
  itemsListDiet: any;
  dietItems: any;
  mealItems: any;
  itemsListMeal: any;
  byDiet: String = "";
  byMeal: String = "";
  constructor(public menuService: MenuAPIsService) {}

  ngOnInit() {}

}
