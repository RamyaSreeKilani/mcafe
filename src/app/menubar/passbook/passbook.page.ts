import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {

  // title1="Received points from Surya ";
  // title2="Pizza";
  Points=2000;
  // title="Pizza";
  // cost=300;
  // cost1="300Cr";
  // cost2="300";
  itemss=[{"title":"Pizza","Pts":300},
  {"title":"Received from Meghana","Pts":400},
  {"title":"Credited to Surya","Pts":200},
  {"title":"Veg Biryani","Pts":200},
  {"title":"Received from Pooja","Pts":300},
  {"title":"Chicken Burger","Pts":250},
  {"title":"Received from Shankar","Pts":500},
  
]
Credit="Cr";
Debit="Dr";


  date=Date.now(); 

  constructor(private route:Router) {}

 
  // details(item)
  // {
  //   this.rout.navigate(['/acknowledgement',item.name]);
  // }

  ngOnInit() {
  }

}
