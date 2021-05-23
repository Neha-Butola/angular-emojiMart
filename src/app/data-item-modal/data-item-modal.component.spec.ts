import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataItemModalComponent } from './data-item-modal.component';

describe('DataItemModalComponent', () => {
  let component: DataItemModalComponent;
  let fixture: ComponentFixture<DataItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
