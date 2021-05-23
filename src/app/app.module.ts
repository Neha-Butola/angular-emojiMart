import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataItemListComponent } from './data-item-list/data-item-list.component';
import { DataItemCardComponent } from './data-item-list/data-item-card/data-item-card.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DataItemModalComponent } from './data-item-modal/data-item-modal.component';
import { FormsModule } from '@angular/forms';
import {  MatSelectModule}   from '@angular/material/select';
import { MainContentComponent } from './main-content/main-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SegmentItemComponent } from './segment-item/segment-item.component';
import { SegmentItemModalComponent } from './segment-item-modal/segment-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DataItemListComponent,
    DataItemCardComponent,
    DataItemModalComponent,
    MainContentComponent,
    SidebarComponent,
    SegmentItemComponent,
    SegmentItemModalComponent,
  ],
  imports: [
    BrowserModule,
    PickerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
