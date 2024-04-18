import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyItemComponent } from './specialty-item.component';

describe('SpecialtyItemComponent', () => {
  let component: SpecialtyItemComponent;
  let fixture: ComponentFixture<SpecialtyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialtyItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialtyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
