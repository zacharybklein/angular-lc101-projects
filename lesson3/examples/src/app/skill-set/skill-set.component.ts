import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = 'salmon';
   bulletType: string = 'i';
   changeColor: boolean = true;
   var1: number = 5;
   var2: number = 4;
   reved: string = "";


   constructor() { }

   ngOnInit() { }

}
