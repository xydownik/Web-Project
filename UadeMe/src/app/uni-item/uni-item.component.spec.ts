import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniItemComponent } from './uni-item.component';

describe('UniItemComponent', () => {
  let component: UniItemComponent;
  let fixture: ComponentFixture<UniItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
