import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  
  searchMovieUrl = 'http://localhost:3000/searchMovie'
  actionMovieUrl = `http://localhost:3000/actionmovies`
  horrorMoviesUrl = 'http://localhost:3000/horrormovies'
  comedyMoviesUrl = 'http://localhost:3000/comedyMovies'
  thrillerMoviesUrl = 'http://localhost:3000/thrillerMovies'
  postNewAccountData = 'http://localhost:3000/NewAccount'
  seriesDataUrl = 'http://localhost:3000/series'
 

  constructor(private http:HttpClient) { }

  postAccountData(data:any){
    return this.http.post(this.postNewAccountData,data)
  }

  getActionMoviesData(){
    return this.http.get(this.actionMovieUrl)
  }

  getHorrorMovies(){
    return this.http.get(this.horrorMoviesUrl)
  }

  getComedyMovies(){
    return this.http.get(this.comedyMoviesUrl)
  }

  getThrillerMovies(){
    return this.http.get(this.thrillerMoviesUrl)
  }

  getSeriesData(){
    return this.http.get(this.seriesDataUrl)
  }

  validateUser(Email:any,Password:any){
    return this.http.get("http://localhost:3000/NewAccount?Email="+Email+"&Password="+Password)
  }

  getEachActionMovies(id:any){
    return this.http.get(`http://localhost:3000/actionmovies/${id}`)
  }
  
  searchMovie(){
    return this.http.get(this.searchMovieUrl)
  }

  fullNameValidation(){
    var nameValidation = [Validators.required,Validators.maxLength(15)];
    return nameValidation;
  }

  emailRegex= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
  emailValidation(){
    var emailValidation = [Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]
    return emailValidation
  }

  passwordValidation(){
    var password = [Validators.required,Validators.maxLength(15),Validators.minLength(10)]
    return password
  }

  reEnterPasswordValidation(){
    var reEnterpassword = [Validators.required,Validators.maxLength(15),Validators.minLength(10)]
    return reEnterpassword
  }

  postWishlistData(data:any){
      return this.http.post('http://localhost:3000/wishlist',data)
  }

  getWishlistData(){
    return this.http.get('http://localhost:3000/wishlist')
  }

  deleteWishlistData(id:any){
    return this.http.delete(`http://localhost:3000/wishlist/${id}`)
  }
}

