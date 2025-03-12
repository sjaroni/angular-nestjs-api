import { Component, inject, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-nestjs-api';
  private dataService = inject(DataService);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dataService
      .getData()
      .pipe(
        catchError((error) => {
          console.error('Fehler beim Laden der Daten', error);
          return of([]); // Gibt ein leeres Array zurück
        })
      )
      .subscribe((response) => (this.data = response));
  }
}
