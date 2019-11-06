import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Information } from 'src/app/view/info';


@Component({
  selector: 'country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  @Input() country : Information;    
  @Output()
  notifyLanguage : EventEmitter<string> = new EventEmitter<string>();
  @Output()
  notifyCurrency : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }
  languageSelected(code){ this.notifyLanguage.emit(code);}
  currencySelected(code){ this.notifyCurrency.emit(code);}
 
  
}
