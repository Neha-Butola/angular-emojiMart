import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataItemCardComponent } from './data-item-card.component';

describe('DataItemCardComponent', () => {
  let component: DataItemCardComponent;
  let fixture: ComponentFixture<DataItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
