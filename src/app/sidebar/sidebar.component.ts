import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SegmentItem } from '../model/segment-item.model';
import { SegmentItemModalComponent } from '../segment-item-modal/segment-item-modal.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  segments: SegmentItem[] = [
    {
      name: "Segment 1",
      icon: '🖖',
      description: "test"
    },
    {
      name: "Segment 2",
      icon: '🐢',
      description: "test"
    },
  ];

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(SegmentItemModalComponent , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
        this.segments.push(result);
      }
    }); 
  }
}
