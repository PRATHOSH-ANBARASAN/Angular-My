import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  userData={
    email:null,
    password:null
  }

  userLogin:FormGroup|any

  ngOnInit(){
    this.onForm();
    
  }

  onForm(){
    this.userLogin=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
    this.userData.email=this.userLogin.value.email;
    this.userData.password=this.userLogin.value.password;

    console.log(this.userData);

    this.userLogin.reset();

  }



}
