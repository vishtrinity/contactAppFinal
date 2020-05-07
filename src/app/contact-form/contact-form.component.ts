import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Icontact } from '../dataModels/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
rForm:FormGroup;
post:Icontact;
  constructor(private fb:FormBuilder,private contactService:ContactService) { }

  ngOnInit() {
    this.rForm=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      lastName:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      status:[true,[Validators.requiredTrue]]
    })

    //this.rForm.valueChanges.subscribe(console.log);
  }



  get firstName(){
    return this.rForm.get('firstName');
  }

  get lastName(){
    return this.rForm.get('lastName');
  }


  get email(){
    return this.rForm.get('email');
  }


  get phone(){
    return this.rForm.get('phone');
  }

  get status(){
    return this.rForm.get('status');
  }
  observer={
    next:(value:Icontact)=>console.log("shakdu",value),
    error:(err:string)=>console.log(err),
    complete:()=>console.log("insertion complete")
    
  }

  submitData(value:Icontact){
    console.log(value);
     this.contactService.sendData(value).subscribe(this.observer);
  }


}
