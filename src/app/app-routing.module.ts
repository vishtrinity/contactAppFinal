import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



const routes: Routes = [
  {path:'',redirectTo:'contactForm',pathMatch:'full'},
  {path:'contactList',component:ContactListComponent},
  {path:'contactForm',component:ContactFormComponent},
  {path:'contactEdit',component:ContactListComponent},
  {path:'contactSearch',component:ContactListComponent},
  {path:'**',component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
