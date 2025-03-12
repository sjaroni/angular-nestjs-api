import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  //private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Beispiel-API
  private apiUrl = 'http://localhost:3000/movies';

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}