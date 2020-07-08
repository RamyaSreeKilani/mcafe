import { Component, OnInit } from "@angular/core";
import { MenuAPIsService } from "src/app/serviceANDmodel/menu-apis.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  item: any;
  itemsnumber: any = 1;
  orderPoints: any;
  points = 0;
  allCartItems: any[];
  itemId: any;

  constructor(private menuService: MenuAPIsService) {}

  ngOnInit() {
    this.item = JSON.parse(sessionStorage.getItem("SelectedItem"));
    this.getCartsList();
  }

  getCartsList() {
    this.allCartItems = [];
    this.menuService.getCartList("20").subscribe((res) => {
      console.log("cartResponse",res);

     if(res){ this.allCartItems = res.cartArray; }
      console.log("catlog response", res);
    });
  }

  remove(item) {
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
      item.totalPoints-=item.points;
      let cartUpdate={
        employeeID:"20",
        title:item.title,
        quantity:item.quantity,
        points:item.totalPoints
      }
      console.log('cartUpdate',cartUpdate);

      this.menuService.updateCartList(cartUpdate).subscribe((res) => {
        console.log(res);
        this.getCartsList();
      });
    }
    else{
      item.quantity=1;
    }
  }

  add(item) {
    item.quantity++;
    item.totalPoints+=item.points;
    let cartUpdate={
      employeeID:"20",
      title:item.title,
      quantity:item.quantity,
      totalPoints:item.totalPoints
    }
    console.log('cartUpdate',cartUpdate);

    this.menuService.updateCartList(cartUpdate).subscribe((res) => {
      console.log(res);

      this.getCartsList();
    });
  }

  postOrUpdateCart() {
    if (this.itemId == "") {
      this.menuService.addToCart(this.itemId).subscribe((res) => {
        // To insert data into database;
        this.getCartsList(); //after insert reset the form
        alert("succesfully Inserted");
      });
    } else {
      this.menuService.updateCartList(this.itemId).subscribe((res) => {
        this.getCartsList();
        alert("successfully Updated");
      });
    }
  }
}
