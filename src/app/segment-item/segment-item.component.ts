import { Component, Input, OnInit } from '@angular/core';
import { SegmentItem } from '../model/segment-item.model';

@Component({
  selector: 'app-segment-item',
  templateUrl: './segment-item.component.html',
  styleUrls: ['./segment-item.component.scss']
})
export class SegmentItemComponent implements OnInit {

  constructor() { }
  
  @Input() segmentItems: SegmentItem[]  
  

  ngOnInit(): void {
  }

}
