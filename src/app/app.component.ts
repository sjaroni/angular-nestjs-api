import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-nestjs-api';
  data: any[] = [];
  
  ngOnInit(): void {
    this.fetchData();
  }

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/movies'; // aus eigener mysql-DB
  
  fetchData() {
    // console.log('passt');
    this.http.get(this.apiUrl).subscribe((resp: any) => {
      console.log(resp);
      this.data = resp;
    })
  }
}
