import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRes2Component } from './test-res-2.component';

describe('TestRes2Component', () => {
  let component: TestRes2Component;
  let fixture: ComponentFixture<TestRes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRes2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
