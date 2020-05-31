import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse, HttpXsrfTokenExtractor } from '@angular/common/http';
@Component({
  selector: 'app-sneak-peek',
  templateUrl: './sneak-peek.component.html',
  styleUrls: ['./sneak-peek.component.less']
})
export class SneakPeekComponent implements OnInit {
  demoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    soPropose: new FormControl(''),
    rollManager: new FormControl(''),
    communique: new FormControl(''),
    connections: new FormControl(''),
    legiscript: new FormControl(''),
    insights: new FormControl(''),
    thirdwatch: new FormControl(''),
    comments: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  onSubmit() {
    const body = new HttpParams()
    .set('form-name', 'demoForm')
    .append('firstName', this.demoForm.value.firstName)
    .append('lastName', this.demoForm.value.lastName)
    .append('company', this.demoForm.value.company)
    .append('role', this.demoForm.value.role)
    .append('email', this.demoForm.value.email)
    .append('phone', this.demoForm.value.phone)
    .append('soPropse', this.demoForm.value.soPropose)
    .append('rollManager', this.demoForm.value.rollManager)
    .append('communique', this.demoForm.value.communique)
    .append('connections', this.demoForm.value.connections)
    .append('legiscript', this.demoForm.value.legiscript)
    .append('insights', this.demoForm.value.insights)
    .append('thirdwatch', this.demoForm.value.thirdwatch)
    .append('comments', this.demoForm.value.message);
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          // client side error
          alert('Something went wrong when sending your message.');
          console.log(err.error.message);
        } else {
          // backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert('Your message has been sent!');
          } else {
            alert('Something went wrong when sending your message.');
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          }
        }
      }
    );
  }

  ngOnInit(): void {

  }

}
