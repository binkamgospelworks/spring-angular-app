import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app works!';
  result = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public sayHello(): void {
    this.result = 'loading...';
    this.http.get(`/api/test`).subscribe(response => this.result = response['value']);
  }
}
