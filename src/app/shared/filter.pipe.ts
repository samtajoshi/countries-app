import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public countries: any;
  transform(allCountries: any, searchItem: any): any {
    if (searchItem == null || searchItem == '' || searchItem == undefined) {
      return allCountries;
    }  //end of if 
    else {
      this.countries = [];
      for (let country of allCountries) {        
        if (((country.nativeName.toLowerCase()) === (searchItem.toLowerCase())) ||
        (((country.name.toLowerCase()).substr(0, searchItem.length)) === (searchItem.toLowerCase()))) {
        this.countries.push(country);

        }  //end of if


      }  //enf of for
    }  //end of else loop
    return this.countries;
  }  //end of else
    //end of transform

} 
