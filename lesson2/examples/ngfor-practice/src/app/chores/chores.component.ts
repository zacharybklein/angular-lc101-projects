import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher', 'Complete LaunchCode prep work'];
   todoTitles = ["Yesterday's Chores", "Today's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
