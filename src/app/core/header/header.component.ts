import { Component, OnInit,EventEmitter, Output, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    console.log("Route==========>",this.route.url)
  }

 

  
}
