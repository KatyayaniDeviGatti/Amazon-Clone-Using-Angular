import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  constructor(private ms:MovieserviceService){}

  ngOnInit(){
    this.getData()
  }
  wishlist:any = []
  getData(){
    this.ms.getWishlistData().subscribe(
      (data:any)=>{
        console.log(data)
        this.wishlist = data
      }
    )
  }
}
