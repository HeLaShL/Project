import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css','../app.component.css']
})
export class Screen1Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  navigateToScreen3(){
    (<HTMLDivElement> document.getElementById("mainContainer")).className="hiddenContainer";
    
  }
}
