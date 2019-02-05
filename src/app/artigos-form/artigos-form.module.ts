import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtigosFormComponent } from './artigos-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    ArtigosFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],  
  exports: [
    ArtigosFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ArtigosFormModule { }
