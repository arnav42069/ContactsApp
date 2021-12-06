import { Component, OnInit } from '@angular/core';
import Contact from '../Contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-get',
  templateUrl: './contact-get.component.html',
  styleUrls: ['./contact-get.component.css']
})
export class ContactGetComponent implements OnInit {

  contacts: Contact[];
  constructor(private ps: ContactsService) { }

  ngOnInit() {
    this.ps
      .getContacts()
      .subscribe((data: Contact[]) => {
        this.contacts = data;
    });
  }

  // Contact-get.component.ts

  deleteContact(id) {
    this.ps.deleteContact(id).subscribe(res => {
      this.contacts.splice(id, 1);
    });
  }
}