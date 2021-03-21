import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

interface Message {
  text: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private subject;
  private messages;

  title = 'docker-app';
  error = null;
  messages$ = this.http.get<[Message]>(environment.apiUrl + '/messages/')
    .pipe(
      switchMap(messages => {
        this.messages = messages;
        return this.subject = new BehaviorSubject(messages);
      }),
    );

  constructor(private http: HttpClient) {
  }

  addMessage(target: HTMLInputElement): Promise<void> {
    if (!target.value) {
      return;
    }

    this.error = null;
    return this.http.post<Message>(environment.apiUrl + '/messages/', {text: target.value})
      .toPromise()
      .then(message => {
        this.messages = [message, ...this.messages].slice(0, 3);
        this.subject.next(this.messages);

        target.value = '';
      })
      .catch(e => this.error = e.message);
  }
}
