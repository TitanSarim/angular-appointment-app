import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentListComponent, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appointment-app';
}
