import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentItemModalComponent } from './segment-item-modal.component';

describe('SegmentItemModalComponent', () => {
  let component: SegmentItemModalComponent;
  let fixture: ComponentFixture<SegmentItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
