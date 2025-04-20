import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-openning-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './openning-page.component.html',
  styleUrl: './openning-page.component.css'
})
export class OpenningPageComponent {
  @Input() data = {
    title: 'Contact',
    // description: '',
    image: 'assets/img/breadcrumb-2.jpg',
    alt:'background',
    // links_tree:[
    //   {name: 'Contact', class: 'active',},
    //   {name: 'Home', routerlink:'/home'},
    // ]
  };

}
