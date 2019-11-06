import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  public baseUrl : any;

  constructor(public http : HttpClient) {
    this.baseUrl = 'https://restcountries.eu/rest/v2/';
   }

   //function to get particular information
   public viewAll :any =()=>{
     return this.http.get(this.baseUrl+'all?fields=languages;currencies')
   }

   //function to get all countries of a particular region
   public viewAllCountriesOfARegion :any=(region)=>{
    
    //filtering the response
    return this.http.get(this.baseUrl+'region/'+region+'?fields=name;nativeName;alpha3Code;flag;capital;subregion;timezones;languages;currencies');
   }

   //function to get information of a particular country using alpha3Code
   public viewParticularCountry :any =(alpha3Code)=>{

    return this.http.get(this.baseUrl+'alpha/'+alpha3Code)
   }
   
   //function to get all countries with particular language
   public viewCountriesWithALanguage :any =(name)=>{
    return this.http.get(this.baseUrl+'lang/'+name+'?fields=name;alpha3Code;nativeName;flag;capital;subregion;timezones;languages;currencies')
   }

   //function to get all countries with particular currency
   public viewCountriesWithACurrency :any=(name)=>{
    return this.http.get(this.baseUrl+'currency/'+name+'?fields=name;alpha3Code;nativeName;flag;capital;subregion;timezones;languages;currencies')
   }

   private handleError(err : HttpErrorResponse){
    let msg ='';
    if(err.error instanceof Error) {
      msg = `An error occured : ${err.error.message}`;
      alert(msg);
    }
  }    //end og handleError function()


}
