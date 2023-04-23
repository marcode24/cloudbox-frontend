import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsDropdownComponent } from './dots-dropdown.component';

describe('DotsDropdownComponent', () => {
  let component: DotsDropdownComponent;
  let fixture: ComponentFixture<DotsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
