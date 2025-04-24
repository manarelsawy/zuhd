import { Component, Input } from '@angular/core';
import { OpenningPageComponent } from '../shaered components/openning-page/openning-page.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [OpenningPageComponent,NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Input() oppenning_isshow: boolean = true;
  data = {
    title: 'Services 1',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
  }
}
