import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';

  formList: {firstName:string,lastName:string,phoneNumber:number,email:string,address1:string,country:string,state:string}[]
  = [];

  onFormAdded(form:{firstName:string,lastName:string,phoneNumber:number,email:string,address1:string,country:string,state:string})
  {
       this.formList.push({firstName:form.firstName,lastName:form.lastName,phoneNumber:form.phoneNumber,email:form.email,address1:form.address1,country:form.country,state:form.state})
       localStorage.setItem('details',JSON.stringify(this.formList));  
  }

 
}

