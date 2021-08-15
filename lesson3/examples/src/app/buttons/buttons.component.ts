import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   jokeInactive: boolean = false;

   resetButtons(status) {
      if (status = true) {
         this.goldInactive = false;
         this.silverInactive = false;
         this.copperInactive = false;
      }
   }
   
   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

   constructor() { }

   ngOnInit() { }

}
