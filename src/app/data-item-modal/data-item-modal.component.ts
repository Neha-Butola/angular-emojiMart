import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataItem } from '../model/data-item.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-data-item-modal',
  templateUrl: './data-item-modal.component.html',
  styleUrls: ['./data-item-modal.component.scss']
})


export class DataItemModalComponent implements OnInit {

  data = new DataItem(''  , "😀" , "#334BFA" );

  public isEmojiPickerVisible: boolean;

  constructor( 
    public dialogRef: MatDialogRef<DataItemModalComponent> ) {
     
    }


  colors = [

    'rgba(207, 223, 255, 1)', 'rgba(156, 199, 255, 1)', 'rgba(45, 127, 249, 1)', 'rgba(0, 103, 255, 1)', 'rgba(0, 84, 209, 1)',
    
    'rgba(208, 240, 253, 1)', 'rgba(119, 209, 243, 1)', 'rgba(24, 191, 255, 1)', 'rgba(64, 131, 172, 1)', 'rgba(11, 118, 183, 1)',
    
    'rgba(194, 245, 233, 1)', 'rgba(114, 221, 195, 1)', 'rgba(32, 217, 210, 1)', 'rgba(123, 200, 195, 1)', 'rgba(6, 160, 155, 1)',
    
    'rgba(255, 179, 200, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 0, 73, 1)', 'rgba(218, 2, 64, 1)',
    
    'rgba(255, 227, 175, 1)', 'rgba(255, 214, 140, 1)', 'rgba(255, 197, 92, 1)', 'rgba(253, 178, 43, 1)', 'rgba(232, 149, 0, 1)',
    
    'rgba(255, 159, 242, 1)', 'rgba(254, 103, 233, 1)', 'rgba(246, 56, 220, 1)', 'rgba(255, 0, 220, 1)', 'rgba(214, 0, 184, 1)',
    
    'rgba(255, 181, 152, 1)', 'rgba(255, 158, 121, 1)', 'rgba(255, 120, 68, 1)', 'rgba(255, 71, 0, 1)', 'rgba(197, 55, 0, 1)',
    
    'rgba(175, 181, 255, 1)', 'rgba(142, 150, 255, 1)', 'rgba(107, 118, 255, 1)', 'rgba(49, 64, 255, 1)', 'rgba(0, 19, 255, 1)',
    
    'rgba(131, 204, 139, 1)', 'rgba(97, 199, 108, 1)', 'rgba(32, 201, 51, 1)', 'rgba(0, 181, 20, 1)', 'rgba(51, 138, 23, 1)',
    
    'rgba(238, 238, 238, 1)', 'rgba(204, 204, 204, 1)', 'rgba(172, 172, 172, 1)', 'rgba(102, 102, 102, 1)', 'rgba(68, 68, 68, 1)'
    
  ];

  
  ngOnInit(): void {
  }

 
  public addEmoji(event) {
    this.data.icon = '';
    this.data.icon  = `${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
 }

 onSelectColor(e) {
  //  const elem = document.querySelector('.mat-select-min-line');
    this.data.color= e;
 }

  onSubmit(form: NgForm) {
    this.dialogRef.close(form.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
