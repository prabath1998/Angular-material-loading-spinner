import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading-spinner';
  loading$ = this.loader.loading$;

  constructor(public loader:LoadingService,private http: HttpClient){}

  fetchUser(){
    this.http.get('https://api.github.com/users/prabath1998').subscribe(res => {
      console.log(res);
      
    })
  }
}
