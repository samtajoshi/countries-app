import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../info';


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  public searchItem : any;
  public allCountries :any;  
 public langCode :any;
 public currencyCode:any;
  

  constructor(public appService: AppService, public _route: ActivatedRoute, public router: Router, public toastr: ToastrService) {
     
    
    
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
      
      data=>{
        this.allCountries=data;
      },
      error=>{
        this.toastr.error('some error occured');
        console.log(error.message);
      }
    )
  }  //end of showListL()

  //function to get all countries with particular currency
  public showListC : any=(code)=>{    
    this.allCountries=[];
    this.appService.viewCountriesWithACurrency(code).subscribe(
      
      data=>{
        this.allCountries=data;
        
      },
      error=>{
        this.toastr.error('some error occured');
        console.log(error.message);
      }
    )
  }  //end of showListC()

  //function to get all countries with particular region
  public showListR : any=(code)=>{    
    this.allCountries=[];
    this.appService.viewAllCountriesOfARegion(code).subscribe(
      
      data  =>{
         
        this.allCountries=data;
       
      },
       error=>{
        this.toastr.error('some error occured');
        console.log(error.message);
      }
    )
  }  //end of showListR()
}

