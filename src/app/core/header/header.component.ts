import { Component, OnInit,EventEmitter, Output, Input, HostListener } from '@angular/core';
import { ActivatedRoute,Router,NavigationEnd   } from '@angular/router'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  MenuHead:any
  currentRoute:any


  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    console.log(this.router.url);
    
    

    
   
  }
  

 

  
}
