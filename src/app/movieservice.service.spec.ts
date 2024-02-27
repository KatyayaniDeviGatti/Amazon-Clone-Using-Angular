import { TestBed } from '@angular/core/testing';

import { MovieserviceService } from './movieservice.service';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('MovieserviceService', () => {
  let service: MovieserviceService;
 let httpController:HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MovieserviceService]
    });
    service = TestBed.inject(MovieserviceService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('Get Search Movies Data',()=>{
    const testpost = [
      {
        "id": 1,
        "movieName": "Pushpa",
        "imageUrl": "https://1.bp.blogspot.com/-DaDvqlukc5w/YIlKT2xv5eI/AAAAAAAAVCU/JjkI-j8EQoE0JibnZf-Ltqw1r2Tla-BkgCLcBGAsYHQ/s800/pushpa-Telugu-Movie.jpg"
      },
      {
        "id": 2,
        "movieName": "Avatar",
        "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-Cn-LNI26iscUBpp5cpXpEwIq8k_rwDbQSPGQe3yPL8b-TOGx"
      },
    ];

    service.searchMovie().subscribe(
      (data:any)=>{
        expect(testpost).toEqual(data)
      })

      const req = httpController.expectOne(service.searchMovieUrl);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(testpost);
      httpController.verify();

  });

  it('Get HorrorMovies Data',()=>{
   const horrorposts = [
    {
      "imageUrl": "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mummy-et00049458-24-03-2017-15-38-36.jpg"
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1en-vw7cKMiJBa0N_2g8aK3Gxloczbquys5-izji4gPWYq8pVsgNTSUoOR9Yfk3GD3u4&usqp=CAU"
    }
  ]

    service.getHorrorMovies().subscribe(
      (data:any)=>{
        expect(horrorposts).toEqual(data)
      }
    );

    const req = httpController.expectOne(service.horrorMoviesUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(horrorposts);
    httpController.verify()

  });

  it('Get Comedy Movies Data',()=>{
    const comedyposts = [
      {
        "imageUrl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jathi-ratnalu-et00305719-23-02-2021-02-59-47.jpg"
      },
      {
        "imageUrl": "https://www.bibliaimpex.com/books/pics/9789380070186.jpg"
      }
    ]
    service.getComedyMovies().subscribe(
      (data:any)=>{
        expect(comedyposts).toEqual(data)
      }
    )

    const req = httpController.expectOne(service.comedyMoviesUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');

    req.flush(comedyposts);
    httpController.verify()
  
  })


  it('Get Thriller Movies Data',()=>{
    const  thrillerposts = [
      {
        "imageUrl": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jathi-ratnalu-et00305719-23-02-2021-02-59-47.jpg"
      },
      {
        "imageUrl": "https://www.bibliaimpex.com/books/pics/9789380070186.jpg"
      }
    ]
    service.getThrillerMovies().subscribe(
      (data:any)=>{
        expect(thrillerposts).toEqual(data)
      }
    )

    const req = httpController.expectOne(service.thrillerMoviesUrl);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json');

    req.flush(thrillerposts);
    httpController.verify()
  
  })
  
  it('Get Series Data Method test case',()=>{
     const seriesData =[
      {
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFirwFaJT-HZaY30Qh1Vf94_1sgVXlgUGovQ&usqp=CAU"
      },
      {
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBflerd0f9kAKyKQCNnY6ghDWtYAHZAO78E9ynGa5Lwt2ritn_1hYarBRqShW_x3GS_7s&usqp=CAU"
      }
     ];

     service.getSeriesData().subscribe(
      (data:any)=>{
        expect(seriesData).toEqual(data)
      }
     );

     const req = httpController.expectOne(service.seriesDataUrl);
     expect(req.cancelled).toBeFalsy();
     expect(req.request.responseType).toEqual('json');

     req.flush(seriesData);
     httpController.verify()
    });

    it('NewAccount Post Data test case',()=>{
      const accountData = [
        {
          "FullName": "Katyayani Devi Gatti",
          "Email": "katty@gmail.com",
          "Password": "Katty@2345",
          "ReEnterPassword": "Katty@2345",
          "id": 1
        },
        {
          "FullName": "Katyayani Devi",
          "Email": "katty@gmail.com",
          "Password": "Katty@2609",
          "ReEnterPassword": "Katty@2609",
          "id": 2
        }
      ];

      service.postAccountData(accountData).subscribe(
        (data:any)=>{
          expect(accountData).toEqual(data)
        }
      );

      const req = httpController.expectOne(service.postNewAccountData);
      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toBe('json');

      req.flush(accountData);
      httpController.verify()
    })
  
});
