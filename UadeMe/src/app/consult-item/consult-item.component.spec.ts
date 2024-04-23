import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultItemComponent } from './consult-item.component';

describe('ConsultItemComponent', () => {
  let component: ConsultItemComponent;
  let fixture: ComponentFixture<ConsultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
