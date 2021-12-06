import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactGetComponent } from './contact-get/contact-get.component';

const routes: Routes = [
  {
    path: 'contact/create',
    component: ContactAddComponent
  },
  {
    path: 'edit/:id',
    component: ContactEditComponent
  },
  {
    path: 'contact',
    component: ContactGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
