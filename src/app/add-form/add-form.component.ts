import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  fname='';
  lname='';
  pnumber=0;
  email='';
  adr='';
  ctry='';
  st='';


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl('')
  });

  @Output() form: any = new EventEmitter<{firstName:string,lastName:string,phoneNumber:number,email:string,address:string,country:string,state:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(firstName:string,lastName:string,phoneNumber:number,email:string,address:string,country:string,state:string) {
    this.fname='';
    this.lname='';
    this.pnumber=0;
    this.email='';
    this.adr='';
    this.ctry='';
    this.st='';
    this.form.emit({firstName,lastName,phoneNumber,email,address,country,state});
    // console.log(this.profileForm.value)
  }

}
