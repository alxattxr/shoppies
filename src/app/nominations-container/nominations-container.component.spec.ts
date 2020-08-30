import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsContainerComponent } from './nominations-container.component';

describe('NominationsContainerComponent', () => {
  let component: NominationsContainerComponent;
  let fixture: ComponentFixture<NominationsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NominationsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
