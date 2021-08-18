import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';

  formList:any = [];

  onFormAdded(data:any)
  {
       this.formList.push({firstName:data.firstName,lastName:data.lastName,phoneNumber:data.phoneNumber,email:data.email,address:data.address,country:data.country,state:data.state})
       localStorage.setItem('form',JSON.stringify(this.formList));  
  }

 
}

