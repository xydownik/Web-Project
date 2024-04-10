import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniListComponent } from './uni-list.component';

describe('UniListComponent', () => {
  let component: UniListComponent;
  let fixture: ComponentFixture<UniListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
