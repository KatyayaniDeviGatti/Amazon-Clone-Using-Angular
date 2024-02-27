import { ComponentFixture, TestBed, async, fakeAsync, tick } from "@angular/core/testing"
import { HomeComponent } from "./home/home.component"
import { AppComponent } from "./app.component"
import { Router, RouterLinkWithHref } from "@angular/router"
import { Location } from "@angular/common"
import { RouterTestingModule } from "@angular/router/testing"
import { AppRoutingModule, routes } from "./app-routing.module"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavbarComponent } from "./navbar/navbar.component"
import { FooterComponent } from "./footer/footer.component"
import { SignInComponent } from "./sign-in/sign-in.component"
import { By } from "@angular/platform-browser"
import { DebugElement } from "@angular/core"


describe('Routing',()=>{
    let component:HomeComponent
    let fixture:ComponentFixture<HomeComponent>

    let appcomponent:AppComponent;
    let appFixture:ComponentFixture<AppComponent>

    let signIncomponent:SignInComponent;
    let signInFixture:ComponentFixture<SignInComponent>

    let navbarComponent:NavbarComponent;
    let navbarFixture:ComponentFixture<NavbarComponent>

    let objRouter:Router;
    let location :Location;

    let debugElement:DebugElement

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[HomeComponent,AppComponent,NavbarComponent,FooterComponent,SignInComponent],
            imports:[AppRoutingModule,FormsModule,HttpClientModule,HttpClientTestingModule,RouterTestingModule.withRoutes(routes)]
        })
        .compileComponents();

    }));

    beforeEach(()=>{
        objRouter = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        appFixture = TestBed.createComponent(AppComponent);
        appcomponent = appFixture.componentInstance;

        signInFixture = TestBed.createComponent(SignInComponent);
        signIncomponent = signInFixture.componentInstance;

        navbarFixture = TestBed.createComponent(NavbarComponent);
        navbarComponent = navbarFixture.componentInstance

        fixture.detectChanges();
        objRouter.initialNavigation()
    });

    it('Unit test case for default route',async(()=>{
        appFixture.detectChanges();
        appFixture.whenStable().then(()=>{
            expect(location.path()).toEqual('/home')
        })
    }));

    it('navigate to "" redirects you to home',fakeAsync(()=>{
        appFixture.detectChanges()
        objRouter.navigate(['']);
        tick();
        expect(location.path()).toBe('/home')
    }))

    it('Go to movieshome page on click of signIn button',fakeAsync(()=>{
        objRouter.navigate(['moviehome']);
        tick();
        let btn = signInFixture.debugElement.nativeElement.querySelector('#signInBtn');
        console.log(btn)
        btn.click();
        expect(location.path()).toEqual('/moviehome')
    }))

    it('Go to account page on click of createAccount Button',fakeAsync(()=>{
        objRouter.navigate(['account']);
        tick();
        let btn = signInFixture.debugElement.nativeElement.querySelector('#newAccount');
        console.log(btn)
        btn.click();
        expect(location.path()).toEqual('/account');
    }))
   
  it('SignIn to prime button',fakeAsync(()=>{
     fixture.detectChanges();
     objRouter.navigate(['signIn']);
     tick();
     let btn = fixture.debugElement.nativeElement.querySelector('#signInPrime')
     btn.click();
     expect(location.path()).toEqual('/signIn')
  }));

  it('Go to signIn account page',fakeAsync(()=>{
    navbarFixture.detectChanges()
    objRouter.navigate(['signIn'])
    tick();
    let btn = navbarFixture.debugElement.nativeElement.querySelector('#navSignInBtn');
    btn.click();
    expect(location.path()).toEqual('/signIn')
}))

})