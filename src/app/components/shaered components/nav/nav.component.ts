import { Component , Input } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgClass } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MegaMenuModule, ButtonModule, CommonModule, AvatarModule,RouterLink , NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  items: MegaMenuItem[] | undefined;


  ngOnInit() {
      this.items = [
          {
              label: 'Company',
              root: true,
              items: [
                  [
                      {
                          items: [
                              { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                              { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [
                              { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                              { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                              { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [
                              { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                              { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                              { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                      }
                  ]
              ]
          },
          {
              label: 'Resources',
              root: true
          },
          {
              label: 'Contact',
              root: true
          }
      ];
  }

}
