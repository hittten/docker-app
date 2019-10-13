import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docker-app';
  message$ = this.http.get<{ message: string }>(environment.apiUrl + '/hello/');

  constructor(private http: HttpClient) {
  }
}
