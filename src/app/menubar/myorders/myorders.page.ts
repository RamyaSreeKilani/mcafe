import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {
 debit="Dr";
  data :any;
  items=[{"name":"Pizza","points":300, "quantity":2,"status":"Delivered","no":"012584"},
  {"name":"Paneer Pizza","points":200,"quantity":2,"status":"Cancelled","no":"112584"},
  {"name":"Veg Burger","points":150,"quantity":1,"status":"Inprogress","no":"712254"},
  {"name":"Panner Curry","points":200,"quantity":3,"status":"Cancelled","no":"414582"},
  {"name":"Chicken Dum Biryani","points":550,"quantity":3,"status":"Delivered","no":"412524"},
  {"name":"Chicken Curry","points":200,"quantity":2,"status":"Delivered","no":"212564"},
  {"name":"Veg Fried Rice","points":250,"quantity":1,"status":"Delivered","no":"312294"},
  {"name":"Panner Curry","points":200,"quantity":4,"status":"Delivered","no":"212984"},
  {"name":"Butter Masala","points":350,"quantity":1,"status":"Delivered","no":"058584"},
  {"name":"Paneer Tikka","points":300,"quantity":4,"status":"Delivered","no":"651584"},
]
date=Date.now(); 

  constructor(private rout:Router) { }


  ngOnInit() {

    
  }
  // details(item)
  // {
  //   this.rout.navigate(['/acknowledgement',item.name]);
  // }
  goBack(){
    this.rout.navigate(['/home']);
  }



  ramya(data)
{
let user:any={
  queryParams:{
special: JSON.stringify(data)
   }
  }
this.rout.navigate(['/acknowledgement'],user);
}

}
