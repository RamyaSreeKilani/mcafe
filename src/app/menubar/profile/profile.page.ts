import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FooditemsService } from 'src/app/fooditems.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuAPIsService } from 'src/app/serviceANDmodel/menu-apis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  searchList: any=[];
  message: any=[];
  tempItem: any=[];
  allergies: any=[];
  diet: any;
  favItems: any=[];
  allItems: any=[];
  shows: boolean= true;

  constructor(private fb:FormBuilder,private router:Router,private ac:ActivatedRoute,private fS:FooditemsService,
    
    private menuApi:MenuAPIsService) 
  
  {
    
    setTimeout( () => {

      this.shows = false;

    },2000)

   }

  name='';
  Emp_Id=4777;
  DOB='May 6th';
  search:boolean=false;
  show:boolean=true;
  edit:boolean=false;
  day:boolean=false;
  emp:any=[];
  resultset:any=[];

  selectedValues:string[]=[];
  
  public selected=[];

  userForm:FormGroup
  loginDetails=JSON.parse(sessionStorage.getItem('signedUser'));
  ngOnInit() {
  
   console.log("user: ",this.loginDetails.username);

   console.log("password: ",this.loginDetails.password);
        
      this.menuApi.getCredentials(this.loginDetails.username,this.loginDetails.password).toPromise().then( data => {
        console.log("data",data);
        this.userForm.patchValue(data);
        for(let key in data)
        {
          if(data.hasOwnProperty(key))
          this.selected.push(data[key]);
          
        }
        this.tempItem = this.selected;
       
        console.log("item",this.tempItem);
    
      })

  

  
    this.userForm =this.fb.group({
      allergies:['',[Validators.required]],
      favourites:['',[Validators.required]],
      meal:['',[Validators.required]],
      days:['',[Validators.required]],
      week:['']
    });
    
    

    this.userForm.get('allergies').disable();
   
    this.userForm.get('favourites').disable();

  }

 


  back()
  {
    this.router.navigate(['/menu']);
  }

  foodPreference()
  {
   
    this.show = !this.show;
    this.edit = !this.edit
    this.search = !this.search

  }

  selectDay()
  {
    console.log("meal",this.userForm.get('meal').value);
    
    this.day = !this.day
  }

  deselectDay()
  {
    console.log("meal1",this.userForm.get('meal').value);
    if(this.day === true)
    {
      this.day = !this.day
    }
  }

  select()
  {
    console.log("week",this.userForm.get('week').value);
  }

  change()
  {
    if(this.day === true)
    {
      this.day=!this.day;
    }
  }

  searchItem(title)
  {
    if(title === "")
    {
      return 
    }
    else{
      console.log('title entered: ',title)
      this.menuApi.getItembyTitle(title).subscribe( res => {
        console.log("response",res)
        this.message.push(res);
        console.log("message ---->",this.message)
      })
    }
  
  }



  // getItem(name)
  // {if(name == '')
  // {
  //   return;
  // }
  // console.log('hi')
  // this.fS.getInfo(name).toPromise().then( data => {
  //   console.log(data);

  //   for (let key in data)
  //   {
  //     if(data.hasOwnProperty(key))
  //     this.select.push(data[key]);
  //   }
  // })
  // }



  addItems(title)
  {
    if(this.tempItem[0].allergies.includes(title))
    {
      return;
    }
    this.tempItem[0].allergies.push(title);
    
    
    console.log("allergies",this.tempItem)
  }

  addToItems(title)
  {
    console.log("tittttle: ",title);
    if(this.tempItem[0].favourites.includes(title))
    {
      return;
    }
    this.tempItem[0].favourites.push(title);
    
    console.log("favourites",this.tempItem)
  }
  
  removeItem(index,state)
  {
 
    if(state === 'favourites')
    {
      this.tempItem[0].favourites.splice(index,1);
    }
    else{
      this.tempItem[0].allergies.splice(index,1);
    }
   

  }
  

  radioevent(event)
  {
    console.log('radio',event.target.value);
    this.diet = event.target.value;
  }

  update()
  {
   
 
    console.log("temp",this.tempItem);
    var data={
      
      favourites:this.tempItem[0].favourites,
      allergies:this.tempItem[0].allergies,
      diet : this.diet,
      days : this.selectedValues
    }
    if(data.diet === 'veg')
    {
      data.days = null;
    }
    
    this.menuApi.update(data,this.loginDetails.username).subscribe( res => {
      this.message = res;
    })
  }
  

}






