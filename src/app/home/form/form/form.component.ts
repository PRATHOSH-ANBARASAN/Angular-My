import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formData={
    name:null,
    email:null,
    phone:null,
    gender:null,
    country:null,
    password:null,
    isvalidInfo:false
  }

  form:FormGroup|any

  formPopup:boolean=false;
// show first hooks
  ngOnInit(){
    this.onForm(); 
   

  }

  // and after show first run this second hook

  ngOnChanges(){
     this.onShowPopup();
  }

  // form popup message
  onShowPopup(){
    this.formPopup=true;
    setTimeout(()=>{
      this.formPopup=false;
    } ,3000)
  }


  
  onForm(){
    this.form=new FormGroup({
      name:new FormControl(null,Validators.required),
      email:new FormControl(null, [Validators.required ,Validators.email]),
      phone:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      isvalidInfo:new FormControl(false,Validators.requiredTrue),

    })
  }

  onSubmit(){
    this.formData.name=this.form.value.name;
    this.formData.email=this.form.value.email;
    this.formData.phone=this.form.value.phone;
    this.formData.gender=this.form.value.gender;
    this.formData.country=this.form.value.country;
    this.formData.password=this.form.value.password;
    this.formData.isvalidInfo=this.form.value.isvalidInfo;

    this.form.reset()

  }

}
