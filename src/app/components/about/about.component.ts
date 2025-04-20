import { Component } from '@angular/core';
import { OpenningPageComponent } from '../shaered components/openning-page/openning-page.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OpenningPageComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data = {
    title: 'Contact',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
  }
}
