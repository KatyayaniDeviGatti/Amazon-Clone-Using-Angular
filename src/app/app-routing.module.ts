import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MovieHomeComponent } from './pages/movie-home/movie-home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';


export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'signIn',component:SignInComponent},
  {path:'account',component:CreateAccountComponent},
  {path:'moviehome',component:MovieHomeComponent},
  {path:'search',component:SearchComponent},
  {path:'search/:query',component:SearchComponent},
  {path:'movieDetails/:id',component:MoviedetailsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
