import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../info';
import {Location} from '@angular/common';




@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers : [Location]
})
export class AllCountriesComponent implements OnInit {
  public searchItem : any;
  public allCountries :any;  
 public langCode :any;
 public currencyCode:any;
 public titleLine : any;
  

  constructor(public appService: AppService,public location : Location, public _route: ActivatedRoute, public router: Router, public toastr: ToastrService) {
     
    
    
   }

  ngOnInit() {
    //to subscribe to route-parameters
    this._route.params.subscribe(data=>{  
      console.log('route_params: ',JSON.stringify(data));
      if(data.lang){
        this.showListL(data.lang);
      }    
      if(data.currency){
        this.showListC(data.currency);
      }
      if(data.region){
        this.showListR(data.region)
      }
     
  });
   
   
    
  }   //end of ngOnInIt()

 //function to get all countries with particular language
  public showListL : any=(code)=>{    
    this.allCountries=[];
    this.appService.viewCountriesWithALanguage(code).subscribe(
      
      (data : Information)=>{
        this.allCountries=data;
        this.titleLine = `Countries with language-code : ${code}`;
        this.toastr.success('data found');
      },
      error=>{
        this.toastr.error('some error occured , navigating back to previous page');
        console.log(error.message);
        this.location.back();
      }
    )
  }  //end of showListL()

  //function to get all countries with particular currency
  public showListC : any=(code)=>{    
    this.allCountries=[];
    this.appService.viewCountriesWithACurrency(code).subscribe(
      
      (data : Information)=>{
        this.allCountries=data;
        this.titleLine = `Countries with currency-code : ${code}`;
        this.toastr.success('data found');
      },
      error=>{
        this.toastr.error('some error occured,navigating back to previous page');
        console.log(error.message);
        this.location.back();
      }
    )
  }  //end of showListC()

  //function to get all countries with particular region
  public showListR : any=(code)=>{    
    this.allCountries=[];
    this.appService.viewAllCountriesOfARegion(code).subscribe(
      
      (data :Information)  =>{
         
        this.allCountries=data;
        this.titleLine = `Countries with region : ${code}`;
        this.toastr.success('data found');
      },
       error=>{
        this.toastr.error('some error occured,navigating back to previous page');
        console.log(error.message);
        this.location.back();
      }
    )
  }  //end of showListR()

  public goBack() :any {
    this.location.back();
  }
}

