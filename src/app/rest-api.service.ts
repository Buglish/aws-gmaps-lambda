import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  postMapPin(pin: any) {
    const respo = '';
    const pinJson = "{\"pin\":"+pin+"}";
    let url = "https://******.execute-api.ap-southeast-2.amazonaws.com/prod/mappinlog";
    this.http.post(url, pinJson, this.httpOptions).subscribe(data => {
      
      return data.toString;
  });

     return respo;
  }

}
