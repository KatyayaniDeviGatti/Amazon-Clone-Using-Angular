import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponent } from './create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieserviceService } from '../movieservice.service';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountComponent],
      imports:[ReactiveFormsModule,HttpClientModule],
      providers:[MovieserviceService]
    });
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing the input fields initailly invalid and untouched
  it('Full Name input intial invalid test case',()=>{
    let fullName = component.accountForm.controls['FullName'];
    expect(fullName.invalid).toBeTruthy();
    expect(fullName.untouched).toBeTruthy()
   
  })

 it('Email input initial invalid test case',()=>{
    let email = component.accountForm.controls['Email'];
    expect(email.invalid).toBeTruthy();
    expect(email.untouched).toBeTruthy();
   });

  it('Password input initial invalid test case',()=>{
    let password = component.accountForm.controls['Password'];
    expect(password.invalid).toBeTruthy();
    expect(password.untouched).toBeTruthy()
   });

  it('ReEnter-Password input initial invalid test case',()=>{
    let reenterpassword = component.accountForm.controls['ReEnterPassword'];
    expect(reenterpassword.invalid).toBeTruthy();
    expect(reenterpassword.untouched).toBeTruthy()
   });

  //  testing validations of reactive form input fields
   it('Set full Name Value',()=>{
    let fullName = component.accountForm.controls['FullName'];
    fullName.setValue('Katyayani Devi');
    expect(fullName.valid).toBeTruthy();
    expect(fullName.value).toEqual('Katyayani Devi')
  });

  it('Set value for Email input test case',()=>{
    let email = component.accountForm.controls['Email'];
    email.setValue('katty@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(email.value).toEqual('katty@gmail.com')
   });

   it('Set Value for reEnter-password input test case',()=>{
    let reenterpassword = component.accountForm.controls['ReEnterPassword']
    reenterpassword.setValue('Katty@123456789');
    expect(reenterpassword.valid).toBeTruthy();
    expect(reenterpassword.value).toEqual('Katty@123456789')
  });

  it('Set Value for password input test case',()=>{
    let password = component.accountForm.controls['Password']
    password.setValue('Katty@123456789');
    expect(password.valid).toBeTruthy();
    expect(password.value).toEqual('Katty@123456789')
  });

 

  

//  testing ngClass
  // it('testing ngClass for fullName input',()=>{
  //   fixture.detectChanges()
  //   let element = fixture.debugElement.nativeElement.querySelector('#fullName');
  //   expect(element.getAttribute('class')).toContain('1.5px solid red')
  // })

});
