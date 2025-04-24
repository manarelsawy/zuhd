import { Component } from '@angular/core';
import { OpenningPageComponent } from '../shaered components/openning-page/openning-page.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [OpenningPageComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  data = {
    title: 'أهم الموضوعات',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
  }

}
