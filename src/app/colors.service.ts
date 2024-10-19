import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private httpClient: HttpClient) { }

    // Get data for colors
    getJsonData(): Observable<any> {
      return this.httpClient.get('http://localhost:3000/blocks');
    }
}
