import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuScroll=false;
  issidebar=false;

 @HostListener('window:scroll')
  scrollCheck(){
    if (window.pageYOffset>55){
      this.isMenuScroll=true
    }
    else{
      this.isMenuScroll=false;
    }
  }

  openSidebar(){
    this.issidebar=true;
  }
  closeSidebar(){
    this.issidebar=false;
  }

}
