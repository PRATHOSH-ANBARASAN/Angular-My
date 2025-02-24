import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from "./login/login/login.component";


@Component({
  selector: 'app-home',
  imports: [CommonModule, LoginComponent,
   ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showMessage:boolean = false;

  ngOnChanges(){
    this.showPopup();
  }

  showPopup(){
    this.showMessage=true;
    setTimeout(()=>{
      this.showMessage=false;
    },3000)
  }


}
