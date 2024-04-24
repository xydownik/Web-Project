import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRes3Component } from './test-res-3.component';

describe('TestRes3Component', () => {
  let component: TestRes3Component;
  let fixture: ComponentFixture<TestRes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRes3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
