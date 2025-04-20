import { NgForOf } from '@angular/common';
import { Component , AfterViewInit, QueryList, ViewChildren, ElementRef} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgForOf,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  implements AfterViewInit{

  counter_items = [
    { target: 50, displayed: 0, text: 'خبراء التقييم', icon: 'fa-house-medical-circle-exclamation', counted: false },
    { target: 100, displayed: 0, text: 'عمالة مهرة', icon: 'fa-helmet-safety', counted: false },
    { target: 60, displayed: 0, text: 'عملاء سعداء', icon: 'fa-face-smile-beam', counted: false },
    { target: 120, displayed: 0, text: 'مشروعات قائمة', icon: 'fa-person-digging', counted: false },
  ];
  
  @ViewChildren('counterElem') counterElems!: QueryList<ElementRef>;
  
  ngAfterViewInit(): void {
    // Observe elements when they enter the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = this.counterElems.toArray().findIndex(el => el.nativeElement === entry.target);
          if (index !== -1 && !this.counter_items[index].counted) {
            this.counter_items[index].counted = true;
            this.startCount(index);
            observer.unobserve(entry.target); // Stop observing after first trigger
          }
        }
      });
    }, { threshold: 0.5 });
  
    this.counterElems.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }
  
  // Count up from 0 to target value
  startCount(index: number): void {
    const target = this.counter_items[index].target;
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        this.counter_items[index].displayed = current;
      }
    }, 50);
  }
  

  
  
}
