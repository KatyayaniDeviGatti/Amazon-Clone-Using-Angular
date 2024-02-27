import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  allMovies:any;
  filteredMovies:any
  OnSearchClick:boolean = false
  constructor(private ms:MovieserviceService,private route:Router,private activated:ActivatedRoute){}
  search={
    InputValue:''
  }
 

  ngOnInit(){
    this.ms.searchMovie().subscribe(
      (data:any)=>{
        this.allMovies = data;
        this.filteredMovies = data
        
      }
    )
    
  }
  
  Search(){
    // console.log(this.search.InputValue)
    this.OnSearchClick = true
    this.filteredMovies = this.allMovies.filter(
      (p:any)=>{
        return p.movieName.toLowerCase().includes(this.search.InputValue.toLowerCase()) 
      
      }
    )
  }


}
