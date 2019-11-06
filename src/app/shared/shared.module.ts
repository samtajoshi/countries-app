import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoComponent } from './country-info/country-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AllCountriesComponent } from '../view/all-countries/all-countries.component';
import { SingleCountryComponent } from '../view/single-country/single-country.component';
import { FilterPipe } from './filter.pipe';





@NgModule({
  declarations: [CountryInfoComponent,FilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,  
    RouterModule.forChild([      
      {path : 'all-countries/:region' , component : AllCountriesComponent},
      {path : 'single-country/:country' , component : SingleCountryComponent}
    ])
  ],

  exports: [CountryInfoComponent,FormsModule,FilterPipe]
})
export class SharedModule { }
