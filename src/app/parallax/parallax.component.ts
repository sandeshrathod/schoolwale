import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';

import gsap from "gsap";

import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})

export class ParallaxComponent implements OnInit {
 
  public cards:string="Philosophy";
  
  constructor() {

   }
  
  cView(){

  }
  shows(s:any){
    this.cards = s;
    
  }
  ngOnInit(): void {
  
  }


}
