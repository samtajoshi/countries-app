import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
//import { FilterPipe } from '../shared/filter.pipe';




@NgModule({
  declarations: [AllRegionsComponent, AllCountriesComponent, SingleCountryComponent],
  imports: [
    CommonModule,
    HttpClientModule,  
    SharedModule,
    FormsModule,
    RouterModule.forChild([  
      
      {path : 'single-country/:country' , component : SingleCountryComponent}
    ])
  ]
})
export class ViewModule { }
