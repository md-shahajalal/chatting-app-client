import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  http = inject(HttpClient);
  registerMode = false;
  
  registerToggle() {
    this.registerMode = !this.registerMode
  }
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
