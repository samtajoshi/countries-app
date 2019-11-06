import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-countries';
  public languages: any;
  public currencies :any;
  public regions :any;
  public presentLang: any;
  public presentCurrency: any;
  public lang: any;
  public currency :any;
  public region :any;
  public countL:any;
  public countC : any;
  public countR:any;
  public itemL:any;
  public itemC :any;
  public data:any;
  public search : any;
  public searchR :any;

  constructor(public appService: AppService,public router : Router,private route: ActivatedRoute,) {
    this.languages = [];
    this.currencies=[];
    this.regions =[];
    this.presentLang = false;
    this.presentCurrency = false;
    this.lang = false;
    this.currency=false;
    this.region=false;
    this.countL=0;
    this.countC=0;
    this.countR=0;
  
    this.appService.viewAll().subscribe(
      data => {  
        this.data=data;   
        
       },   //end of data()
        error => {
          console.log('some error occured');
        }
      ); 
  }

 

  public getAllLanguages: any = () => {
    this.countL++;    
    this.lang=true;
    
    for (let country of this.data) {
      for (let lang of country.languages) {
        this.presentLang=false;
        for (let x of this.languages) {
          if (lang.name === x.name) { this.presentLang = true; }
        }
        if (this.presentLang == false) {
          this.itemL={
            name:lang.name,
            code:lang.iso639_1
          };
          this.languages.push(this.itemL);
        }

      }  //end of language loop           
      
    } //end of country loop 
  } //end of getAllLanguages()

  public getAllCurrencies: any = () => {
    
    this.countC++;       
    this.currency = true;    
    for (let country of this.data) {
      for (let currency of country.currencies) {
        this.presentCurrency=false;
        for (let x of this.currencies) {
          if (currency.name === x.name) { this.presentCurrency = true; }
        }
        if (this.presentCurrency == false) {
          this.itemL={
            "name":currency.name,
            "code":currency.code,
            "nativeName":currency.name
          };
          this.currencies.push(this.itemL);
        }

      }  //end of language loop           
      
    } //end of country loop 
    
  } //end of getAllLanguages()

  public getAllRegions: any = () => {
    this.countR++;    
    this.region=true;     
    this.regions=['africa','americas','asia','europe','oceania']
    
  } //end of getAllLanguages()

  public showCountriesByRegion : any=(region)=>{   
    this.router.navigate(['/countries-by-region', region]);
  }


  public showCountriesByLang : any=(langCode)=>{   
    this.router.navigate(['/countries-by-language', langCode]);
  }

  public showCountriesByCurrency : any=(currencyCode)=>{   
    this.router.navigate(['/countries-by-currency', currencyCode]);
  }
  
}

 