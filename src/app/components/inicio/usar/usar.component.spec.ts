import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsarComponent } from './usar.component';

describe('UsarComponent', () => {
  let component: UsarComponent;
  let fixture: ComponentFixture<UsarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsarComponent]
    });
    fixture = TestBed.createComponent(UsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
