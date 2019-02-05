import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtigosListComponent } from './artigos-list.component';
import { MaterialModule } from '../material.module';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    ArtigosListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatListModule
  ],
  exports: [
    ArtigosListComponent
  ]
})
export class ArtigosListModule { }
