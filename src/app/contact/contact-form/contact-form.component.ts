import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  ContactMethod =[
    { id : 1, name : 'email'} , 
    { id : 2, name : 'sms'}, 
    { id : 3, name : 'telephone'}]
log (x: any)
{
console.log(x);

}
submit (f:any)
{
  console.log(f.value);
  
}
}
