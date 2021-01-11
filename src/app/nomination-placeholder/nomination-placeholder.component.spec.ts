import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationPlaceholderComponent } from './nomination-placeholder.component';

describe('NominationPlaceholderComponent', () => {
  let component: NominationPlaceholderComponent;
  let fixture: ComponentFixture<NominationPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
