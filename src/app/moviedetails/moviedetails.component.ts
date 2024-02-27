import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {

  constructor(private ms:MovieserviceService,private route:ActivatedRoute){}

    
  btnText :any = "Add to Wishlist"
  ngOnInit(){
    this.getActionMovies()
    this.onClickWishlist()
  }


  actionMovies:any
  getActionMovies(){
      let movieId = this.route.snapshot.paramMap.get('id');
      console.log(movieId)
      movieId && this.ms.getEachActionMovies(movieId).subscribe(
        (data)=>{
          // console.log(data)
          this.actionMovies = data
        }
      )
  }

  onClickWishlist(){
    let id = this.actionMovies.id
    let mName = this.actionMovies.movieName;
    let mUrl = this.actionMovies.imageUrl
    
    this.addMovie(id,mName,mUrl)
  }

  wishlist:any
  addMovie(itemid:string,itemName:string,itemUrl:string){
    this.wishlist = {
      id:itemid,
      name:itemName,
      Url:itemUrl,
     
    }
   if(this.btnText === "Add to Wishlist"){
      this.btnText = "Wishlisted"
      this.ms.postWishlistData(this.wishlist).subscribe(
        (data:any)=>{
          console.log(data)
         }
      ) 
   }
   else if(this.btnText === "Wishlisted"){
     this.btnText = "Add to Wishlist"
     this.ms.deleteWishlistData(this.wishlist.id).subscribe(
       (data:any)=>{
          console.log(data)
       }
     )
   }
   
  }
}
