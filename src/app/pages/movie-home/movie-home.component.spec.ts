import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MovieHomeComponent } from './movie-home.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { MoviesComponent } from 'src/app/movies/movies.component';
import { MovieserviceService } from 'src/app/movieservice.service';
import { of } from 'rxjs';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;
  let service:MovieserviceService;
  let httpController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieHomeComponent,MoviesComponent],
      imports:[HttpClientModule,HttpClientTestingModule],
      providers:[MovieserviceService]
    });
    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(MovieserviceService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Unit test case for GetActionMovies subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'getActionMoviesData').and.returnValue(of([]));
    let subSpy = spyOn(service.getActionMoviesData(),'subscribe');
    component.ngOnInit();
    tick();
   
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled()

    // checking actionmovies array data is equal to response data
    service.getActionMoviesData().subscribe(
      (data:any)=>{
        expect(component.actionMovies).toEqual(data) 
      }
    );

    let req = httpController.expectOne(service.actionMovieUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');
    
  }));
  
  it('Unit test case for getHorrorMovies() Subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'getHorrorMovies').and.returnValue(of([]));
    let subSpy = spyOn(service.getHorrorMovies(),'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled()
  }))
 
  it('Unit test case for getComedyMovies() subscribe method',fakeAsync(()=>{
     let spy = spyOn(service,'getComedyMovies').and.returnValue(of([]));
     let subSpy = spyOn(service.getComedyMovies(),'subscribe');
     component.ngOnInit();
     tick()
     expect(spy).toHaveBeenCalledBefore(subSpy);
     expect(subSpy).toHaveBeenCalled()
  }))

  it('Unit test case for getThrillerMovies() subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'getThrillerMovies').and.returnValue(of([]));
    let subSpy = spyOn(service.getThrillerMovies(),'subscribe');
    component.ngOnInit();
    tick()
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled()
  }));

  it('Unit test case for getSeriesData() subscribe method',fakeAsync(()=>{
    let spy = spyOn(service,'getSeriesData').and.returnValue(of([]));
    let subSpy = spyOn(service.getSeriesData(),'subscribe');
    component.ngOnInit();
    tick()
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled()
  }));

  
});


