import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.page.html',
  styleUrls: ['./acknowledgement.page.scss'],
})
export class AcknowledgementPage implements OnInit {

  date=Date.now();
  data:any;

  constructor(private rout:Router,private ac:ActivatedRoute) { }

  food:any=[];

  ngOnInit() {
  


  // itemsl=[{"no":"012584","title":"Pizza", "quantity":2,"points":200},
  // {"no":"112584","title":"Pizza", "quantity":2,"points":200}]
  
    this.ac.queryParams.subscribe( params => {

      console.log('params: ',params); 
      if(params && params.special)
      {
        
        this.food = JSON.parse(params.special)
      }
    })
    // this.food = this.ac.snapshot.params['title'];
  }
  goBack(){
    this.rout.navigate(['/orders']);
  }

}

