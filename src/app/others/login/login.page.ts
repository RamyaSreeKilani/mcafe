import { MenuAPIsService } from './../../serviceANDmodel/menu-apis.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  valid:boolean = false;
  role1:any;
  data:any=[];

 byUserName : String = '';
 byPassword : String = '';
  user: any=[];

  signedUse:any;
  constructor(private router:Router,private fb: FormBuilder,private menuService:MenuAPIsService) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        user:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6)]]
      }
    )
    //this.getEmployeeByName();
  }
  getEmployeeByName(){
    console.log('reached');
    this.user = [];
    this.menuService.getCredentials(this.byUserName,this.byPassword).subscribe((res: any) => {
  this.signedUse =  res;
      console.log(res);
      if(res.length > 0){
        sessionStorage.setItem('signedUser',JSON.stringify(res[0]));
     
      //sessionStorage.setItem('signedUser',JSON.stringify(this.signedUse.data[0]));
      this.user = res.data;
       this.router.navigateByUrl("/home");
    }
    });
  }
  signedUser(arg0: string, signedUser: any) {
    throw new Error("Method not implemented.");
  }

  keys()
  {
    return Object.keys(this.data);
  }
  objValue=Object.keys(this.data)[1];
  }



