import { Injectable } from '@angular/core';
import { Icontact } from './dataModels/contact';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  result:Icontact[];
  url:string='http://localhost:3000/api/register';
contacts:Icontact[];
  constructor(private http:HttpClient) { }

getAllContacts():Observable<Icontact[]>{
 return  this.http.get<Icontact[]>(this.url);
}


// findContacts(value:string):Icontact[]{
//   console.log(value);
//   this.result=this.contacts.filter(item=>{
//     return (item.firstName.toLocaleLowerCase().match(value.toLocaleLowerCase()) || item.lastName.toLocaleLowerCase().match(value.toLocaleLowerCase()));
//   })
//   return this.result;
//  }


sendData(post:Icontact){
  console.log("Post",post)
  return this.http.post(this.url,post);
}

editData(value){
  console.log(value);
  return this.http.get(this.url);
}


}
