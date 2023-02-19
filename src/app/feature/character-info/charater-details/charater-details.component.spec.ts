import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaterDetailsComponent } from './charater-details.component';

describe('CharaterDetailsComponent', () => {
  let component: CharaterDetailsComponent;
  let fixture: ComponentFixture<CharaterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
