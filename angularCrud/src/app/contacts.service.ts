import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  uri = 'http://localhost:4000/contacts';

  constructor(private http: HttpClient) { }

  addContact(ContactName, ContactDescription, ContactNumber) {
    console.log(ContactName, ContactDescription, ContactNumber);
    const obj = {
      ContactName,
      ContactDescription,
      ContactNumber
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getContacts() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editContact(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateContact(ContactName, ContactDescription, ContactNumber, id) {
    const obj = {
      ContactName,
      ContactDescription,
      ContactNumber
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteContact(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
