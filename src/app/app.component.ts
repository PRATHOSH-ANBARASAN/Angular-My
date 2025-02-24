import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-website';
head: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
}
