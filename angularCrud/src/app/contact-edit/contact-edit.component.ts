import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  angForm: FormGroup;
  contact: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ContactsService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      ContactName: ['', Validators.required ],
      ContactDescription: ['', Validators.required ],
      ContactNumber: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editContact(params.id).subscribe(res => {
          this.contact = res;
      });
    });
  }

  updateContact(ContactName, ContactDescription, ContactNumber, id) {
    this.route.params.subscribe(params => {
      this.ps.updateContact(ContactName, ContactDescription, ContactNumber, params.id);
      this.router.navigate(['contact']);
    });
  }
}
