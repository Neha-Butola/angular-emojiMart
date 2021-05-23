import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataItemModalComponent } from 'src/app/data-item-modal/data-item-modal.component';
import { DataItem } from 'src/app/model/data-item.model';

@Component({
  selector: 'app-data-item-card',
  templateUrl: './data-item-card.component.html',
  styleUrls: ['./data-item-card.component.scss']
})
export class DataItemCardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  dataItems : DataItem[] = [];
  
  hasItem = false;

  
  ngOnInit() {
  }

  
  
  openDialog() {
    console.log(this.dataItems);
    const dialogRef = this.dialog.open(DataItemModalComponent , {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
        this.hasItem = true;
        this.dataItems.push(result);
      }
    }); 
  }

}
