import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  result = '';

  constructor(private http: HttpClient){
  }

  public sayHello(): void {
    this.result = 'loading...';
    this.http.get(`/api/test`).subscribe(response => this.result = response['value']);
  }

}