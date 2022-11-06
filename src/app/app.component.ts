import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = 'Bienvenue sur notre site';

  public  getDate():string {

    let date = new Date() ;
    return  date.toLocaleDateString() ;

  }

}
