import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  a: boolean = false;
  b: boolean = false;
  c: boolean = true;
  ngOnInit() {
    //At beginning, we can see both "A" and "B" 
    setTimeout(() => {
       this.a = true; // tab A will go to "..."
        setTimeout(() => {
         this.a = false; // tab "A" should be back to the left of "B"(original position), but it won't
        },5000);
    },5000);
  }
}
