import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPageComponent } from './consult-page.component';

describe('ConsultPageComponent', () => {
  let component: ConsultPageComponent;
  let fixture: ComponentFixture<ConsultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
