import { Component } from '@angular/core';
import { OpenningPageComponent } from '../shaered components/openning-page/openning-page.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [OpenningPageComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  data = {
    title: 'Contact',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
  }
}
