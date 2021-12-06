import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private ps: ContactsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ContactName: ['', Validators.required ],
      ContactDescription: ['', Validators.required ],
      ContactNumber: ['', Validators.required ]
    });
  }

  addContact(ContactName, ContactDescription, ContactNumber) {
    this.ps.addContact(ContactName, ContactDescription, ContactNumber);
    this.router.navigate(['contact']);
  }

  ngOnInit() {
  }

}
