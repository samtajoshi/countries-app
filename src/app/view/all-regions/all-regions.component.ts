import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css']
})
export class AllRegionsComponent implements OnInit {

  constructor(public appService : AppService, public router : Router,public toastr : ToastrService) { }

  ngOnInit() {
  }

}
