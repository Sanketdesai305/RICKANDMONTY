import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaterListComponent } from './charater-list.component';

describe('CharaterListComponent', () => {
  let component: CharaterListComponent;
  let fixture: ComponentFixture<CharaterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
