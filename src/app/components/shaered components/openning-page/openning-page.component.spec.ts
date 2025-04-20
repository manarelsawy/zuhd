import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenningPageComponent } from './openning-page.component';

describe('OpenningPageComponent', () => {
  let component: OpenningPageComponent;
  let fixture: ComponentFixture<OpenningPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenningPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
