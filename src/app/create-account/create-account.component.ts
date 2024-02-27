import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../validators/passwordMatch';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

 
  accountForm:FormGroup;
  constructor(private ms:MovieserviceService){
    this.accountForm = new FormGroup({
      "FullName":new FormControl('',this.ms.fullNameValidation()),
      "Email": new FormControl('',this.ms.emailValidation()),
      "Password":new FormControl('',this.ms.passwordValidation()),
      "ReEnterPassword":new FormControl('',this.ms.reEnterPasswordValidation())
    },[passwordMatch("Password","ReEnterPassword")])
  }

  getControl(name:any):AbstractControl | null{
    return this.accountForm.get(name)
  }
  postAccount(){
    this.ms.postAccountData(this.accountForm.value).subscribe(
      (data:any)=>{
        console.log(data)
        this.clearForm()
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  clearForm(){
    this.accountForm.reset()
  }
}
