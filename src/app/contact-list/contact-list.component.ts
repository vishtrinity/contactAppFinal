import { Component, OnInit } from '@angular/core';

import { Icontact } from '../dataModels/contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
contacts:Icontact[];
id:string;
name:string;
result:Icontact[];
  constructor(private contactService:ContactService,private router:Router) { }
  observer={
    next:(value:Icontact[])=>this.contacts=value,
    error:(err:string)=>console.log(err),
    complete:()=>console.log("get complete")
    
  }
  ngOnInit() {
this.contactService.getAllContacts().subscribe(this.observer);

 console.log(this.contacts);
  
  }

 

  Search(value:string){
   this.contacts.forEach((item)=>console.log(item));
   if(value){
    this.contacts=this.contacts.filter(item=>{
      return (item.firstName.toLocaleLowerCase().match(value.toLocaleLowerCase()) || 
      item.lastName.toLocaleLowerCase().match(value.toLocaleLowerCase()));
    })
 this.contacts.forEach((item)=>console.log("result",item));
  }else{
    this.contactService.getAllContacts().subscribe(this.observer);
  }

   return this.contacts;
  }
  

  editContact(contact:Icontact){
  
this.contactService.editData(contact).subscribe(err=>console.log(err),
data=>{
  console.log(data);
this.router.navigate(["/contactForm",data.firstName])});

  }
}
