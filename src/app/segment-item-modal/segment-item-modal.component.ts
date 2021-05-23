import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SegmentItem } from '../model/segment-item.model';

@Component({
  selector: 'app-segment-item-modal',
  templateUrl: './segment-item-modal.component.html',
  styleUrls: ['./segment-item-modal.component.scss']
})

export class SegmentItemModalComponent implements OnInit {

  segment = new SegmentItem('' , "😀" , '');
  public isEmojiPickerVisible: boolean;

  constructor(
    public dialogRef: MatDialogRef<SegmentItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) item:SegmentItem ) { 

      if(item) {
        this.segment = item;
      }
  }  

  ngOnInit(): void {
  }

  addEmoji(event: any) {
    this.segment.icon = '';
    this.segment.icon  = `${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

 onSubmit(form: NgForm) {
   this.dialogRef.close(form.value)
 }

 onNoClick(): void {
  this.dialogRef.close();
 }

}
