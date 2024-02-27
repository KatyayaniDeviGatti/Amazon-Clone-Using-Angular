import { Component } from '@angular/core';
import { MovieserviceService } from 'src/app/movieservice.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent {

  constructor(private ms:MovieserviceService){}

  ngOnInit(){
    this.getActionMovies();
    this.getHorrorMovies();
    this.getComedyMovies();
    this.getThrillerMovies();
    this.getSeriesData();
  }

  actionMovies:any=[]
  getActionMovies(){
    this.ms.getActionMoviesData().subscribe(
      (data:any)=>{
        console.log(data)
        this.actionMovies = data
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  horrormovies:any=[]
  getHorrorMovies(){
      this.ms.getHorrorMovies().subscribe(
        (data:any)=>{
           console.log(data)
           this.horrormovies = data
        }
      )
  }

  comedyMovies:any = []
  getComedyMovies(){
    this.ms.getComedyMovies().subscribe(
      (data:any)=>{
        console.log(data)
        this.comedyMovies = data
      }
    )
  }
  
  thrillerMovies:any = []
  getThrillerMovies(){
    this.ms.getThrillerMovies().subscribe(
      (data:any)=>{
        console.log(data);
        this.thrillerMovies = data
      }
    )
  }

  seriesData:any = []
  getSeriesData(){
    this.ms.getSeriesData().subscribe(
      (data:any)=>{
        console.log(data);
        this.seriesData = data
      }
    )
  }
}
