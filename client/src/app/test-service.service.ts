import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Description } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) { }
  public goto(description: Description) {
    return this.httpClient.post("http://localhost:8000/", description);
  }
}
