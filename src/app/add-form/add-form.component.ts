import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  fname='';
  lname='';
  pnumber='';
  Email='';
  adr='';
  ctry='';
  st='';


  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(null,Validators.required),
    phoneNumber: new FormControl([Validators.required,Validators.pattern('[- +()0-9]+')]),
    email: new FormControl([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    address: new FormControl(null,Validators.required),
    country: new FormControl(null,Validators.required),
    state: new FormControl(null,Validators.required)
  });

  @Output() form: any = new EventEmitter<{firstName:string,lastName:string,phoneNumber:number,email:string,address:string,country:string,state:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any) {
    this.fname='';
    this.lname='';
    this.pnumber='';
    this.Email='';
    this.adr='';
    this.ctry='';
    this.st='';
    this.form.emit(this.profileForm.value)
   
    console.log(this.profileForm.value)
  }

}
