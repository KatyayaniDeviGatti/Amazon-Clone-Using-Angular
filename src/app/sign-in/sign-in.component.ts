import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

 @ViewChild('loginForm', { static: true }) loginForm!: NgForm;
  authError:string=''
  loginObj={
    "Email":'',
    "Password":''
  }
  emailvalue=this.loginObj.Email;
  passwordValue=this.loginObj.Password;

  constructor(private ms:MovieserviceService,private route:Router){}
  
  postSignInDetails(){
     this.ms.validateUser(this.emailvalue,this.passwordValue).subscribe(
     (data:any)=>{
        if(data.length>0){
          console.log(data)
          localStorage.setItem('logindata',JSON.stringify(data))
          this.route.navigateByUrl('/moviehome')
        }
        else{
          console.log("Wrong Credentials")
          this.authError = "Wrong Credentials"
          this.clearForm()
        }
     })
  }

  gotoaccount(){
    this.route.navigateByUrl('/account')
  }


  clearForm(){
    this.loginObj={
      "Email":'',
      "Password":''
    }
  }

}
