import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.less']
})
export class HelpComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  onSubmit() {
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('firstName', this.contactForm.value.name)
    .append('lastName', this.contactForm.value.lastName)
    .append('email', this.contactForm.value.email)
    .append('phone', this.contactForm.value.phone)
    .append('message', this.contactForm.value.message)
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
