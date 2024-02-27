import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let objRouter:Router;
  let location :Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    objRouter = TestBed.inject(Router);
    location = TestBed.inject(Location);
    objRouter.initialNavigation()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
