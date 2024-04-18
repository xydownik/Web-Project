import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRes1Component } from './test-res-1.component';

describe('TestRes1Component', () => {
  let component: TestRes1Component;
  let fixture: ComponentFixture<TestRes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRes1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
