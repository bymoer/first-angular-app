import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-app';
  randomVariable = 'Just testing data binding and stuff......';
  parentData: string = "Bla bla bla bla.....";

  onNotify(){
    window.alert('You pressed the button utton......!')
  }
}
