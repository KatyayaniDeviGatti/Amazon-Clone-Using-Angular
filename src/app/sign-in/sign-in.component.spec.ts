import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieHomeComponent } from '../pages/movie-home/movie-home.component';
import { AppRoutingModule, routes } from '../app-routing.module';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent,MovieHomeComponent],
      imports:[HttpClientTestingModule,FormsModule,RouterTestingModule.withRoutes(routes),AppRoutingModule]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test cases for two way data binding
  // email variable twoway data binding testing
  it('set emailValue Variable and check input value two way data binding',async(()=>{
    component.emailvalue = 'Kitty@gmail.com';
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      const emailelement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
      expect(emailelement.value).toEqual('Kitty@gmail.com');
    })
  
   }))

  //  set email input value and check email variable value
   it('set input value check emailvalue Variable two way data binding',async(()=>{
      fixture.detectChanges()
      fixture.whenStable().then(()=>{
        const emailinput:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
        emailinput.value = "input_textbox updated";
        emailinput.dispatchEvent(new Event('input'))
        expect(emailinput.value).toEqual(component.emailvalue);
        
      })
    }))

  // password variable twoway data binding testing
  it('set passwordValue Variable check input',async(()=>{
    component.passwordValue = 'Devi@123';
    fixture.detectChanges()
    fixture.whenStable().then(()=>{
      const passwordElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
      expect(passwordElement.value).toEqual('Devi@123');
    
    })
  }));

  // password input twoway data binding testing
  it('set input password value and check passwordValue Variable',async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const passwordElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password')
      passwordElement.value = 'Katty@123';
      passwordElement.dispatchEvent(new Event('input'))
      expect(passwordElement.value).toEqual(component.passwordValue);
    })
  }));

  // testing template driven form fields whether they are invalid and untouched
  it('Template driven form invalid and untouched',async(()=>{
     fixture.whenStable().then(()=>{
        let email = component.loginForm.controls['Email'];
        expect(email.invalid).toBeTruthy();
        expect(email.untouched).toBeTruthy();
      })

  }));

  it('Template driven form valid email',async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const email = component.loginForm.controls['Email'];
      email.setValue('gatti@gmail.com');
      expect(email.valid).toBeTruthy()
    })
  }))

  it('Template driven form invalid and untouched',async(()=>{
    fixture.whenStable().then(()=>{
       let password = component.loginForm.controls['Password'];
       expect(password.invalid).toBeTruthy();
       expect(password.untouched).toBeTruthy();
     })

 }));

 it('Template driven form valid email',async(()=>{
   fixture.detectChanges();
   fixture.whenStable().then(()=>{
     const password = component.loginForm.controls['Password'];
     password.setValue('Katty@2609');
     expect(password.valid).toBeTruthy()
   })
 }))
 

});
