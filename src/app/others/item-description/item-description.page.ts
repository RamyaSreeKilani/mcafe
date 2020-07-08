import { element } from 'protractor';
import { MenuAPIsService } from './../../serviceANDmodel/menu-apis.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.page.html',
  styleUrls: ['./item-description.page.scss'],
})
export class ItemDescriptionPage implements OnInit {
  item:any;
  title: any;
  points: any;
  itemId: any;
  quantity: any;
  cartNumber = 1;
  likes:any=0;
  allCartItems:any=[];
  cartItemNumber=0;
  constructor(public toastCtrl: ToastController,public menuService: MenuAPIsService) { }
  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item added to cart!',
      duration: 2000,
      color: 'medium',
    });
    toast.present();
  }
  ngOnInit() {
  this.item = JSON.parse(sessionStorage.getItem('SelectedItem'));
  }

  getCartsList() {
    this.allCartItems = [];
    this.menuService.getCartList("20").subscribe((res) => {
      this.allCartItems = res.cartArray;
      console.log("catlog response", res);
    });
  }
   PostOrUpdateOnSubmit(){
    this.menuService.getCartList("20").subscribe((res) => {
      var quantity=1;
      var totalPoints=this.item.points;
      if(res){
     res.cartArray.forEach(element => {
       if(element.title==this.item.title){
      quantity=element.quantity+1;
      totalPoints=element.totalPoints+this.item.points;
       }
     });
    }
     let data = {
       title:this.item.title,
       points:this.item.points,
       totalPoints:totalPoints,
       itemId:this.item.itemId,
       quantity:quantity,
       image:this.item.image,
       employeeID:"20"
     }
     console.log("request",data);

     this.menuService.addToCart(data).subscribe((res) => {                      // To insert data into database

       this.openToast();
     });
    });
   }

   postLikes(item){
    item.allLikes+=item.likes;
    let likeUpdate={
                    title:item.title,
                    likes:item.allLikes,
                    itemId:item.itemId,
                   }
                   console.log("itemId",item.itemId);
                   console.log("like",item.likeUpdate);

    this.menuService.updateLikes(likeUpdate).subscribe((res)=>{
   //   console.log(res);
      alert('like added');
     });
}

// To display that the Food item is Veg or Non Veg  with colour

  getStatus(data) {
    switch (data) {
      case 'Veg':
        return 'red';
      case 'Non veg':
        return 'green';
    }
  }
}
