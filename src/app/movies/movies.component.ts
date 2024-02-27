import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  constructor(private route:Router){}
  logout(){
    localStorage.removeItem('logindata')
    this.route.navigate(['/'])
  }
}
