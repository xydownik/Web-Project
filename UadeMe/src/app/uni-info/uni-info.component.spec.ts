import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniInfoComponent } from './uni-info.component';

describe('UniInfoComponent', () => {
  let component: UniInfoComponent;
  let fixture: ComponentFixture<UniInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
