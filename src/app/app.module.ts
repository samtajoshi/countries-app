import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllRegionsComponent } from './view/all-regions/all-regions.component';
import { AppService } from './app.service';
import { AllCountriesComponent } from './view/all-countries/all-countries.component';
import { SharedModule } from './shared/shared.module';
//import { FilterPipe } from './shared/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViewModule,    
    FormsModule,  
    SharedModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    RouterModule.forRoot([
      {path : 'all-regions' , component : AllRegionsComponent, pathMatch :'full'},
      {path : 'countries-by-language/:lang',component : AllCountriesComponent, pathMatch :'full'},
      {path : 'countries-by-currency/:currency',component : AllCountriesComponent},
      {path : 'countries-by-region/:region',component :AllCountriesComponent},
      {path : '', component : AllRegionsComponent},
      {path : '*', component :AllRegionsComponent},
      {path : '**', component : AllRegionsComponent},
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
