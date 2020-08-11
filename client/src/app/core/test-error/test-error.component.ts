import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baserUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baserUrl + 'products/42').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get500Error(){
    this.http.get(this.baserUrl + 'buggy/serverror').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get400Error(){
    this.http.get(this.baserUrl + 'buggy/badrequest').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get404ValidationError(){
    this.http.get(this.baserUrl + 'products/fortytwo').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
