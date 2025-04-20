import { Component } from '@angular/core';
import { OpenningPageComponent } from '../shaered components/openning-page/openning-page.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [OpenningPageComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  data = {
    title: 'Contact',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
  }

}
