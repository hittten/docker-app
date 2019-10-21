import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

interface Message {
  message: string,
  date: Date,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docker-app';
  message$ = this.http.get<Message>(environment.apiUrl + '/hello/');
  messages: [Message];
  id$ = this.http.get('/id', {responseType: 'text'});

  constructor(private http: HttpClient) {
    this.http.get<[Message]>(environment.apiUrl + '/messages/').subscribe(messages => {
      this.messages = messages;
    });
  }

  addMessage(message: string) {
    this.http.post<Message>(environment.apiUrl + '/messages/', {
      message,
    }).subscribe((newMessage) => this.messages.push(newMessage));
  }
}
