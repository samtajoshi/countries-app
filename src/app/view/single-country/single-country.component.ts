import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  public alpha3Code : any;
  public country : any;
  public urlFlag : any;
  public count :any;
 

  constructor(public appService : AppService,public _route : ActivatedRoute, public router : Router, public toastr : ToastrService) {
    this.count=0;
   }

  ngOnInit() {
    this.alpha3Code= this._route.snapshot.paramMap.get("country");
    console.log('alpha3Code is = '+this.alpha3Code);
    this.appService.viewParticularCountry(this.alpha3Code).subscribe(
      data=>{      
         this.country = data;         
         console.log('data found');         
         console.log(this.country)
      },
      error=>
     {
       this.toastr.error('some error occured');
       console.log(error.message);
     }
     
    );
  }
 
 

}
