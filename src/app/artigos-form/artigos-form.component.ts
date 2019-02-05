import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsServiceService } from '../shared/items-service.service';

export interface Item {
  id?: string;
  name: string;
  link: string;
  isReady: boolean;
}
@Component({
  selector: 'app-artigos-form',
  templateUrl: './artigos-form.component.html',
  styleUrls: ['./artigos-form.component.scss']
})
export class ArtigosFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private is: ItemsServiceService
  ) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      link: ['', Validators.required],
      isReady: ['']
    });
  }

  ngOnInit() {
    
  }
  
  onSubmit() {
    this.form.get('isReady').setValue(false);
    this.is.createItem(this.form.value);
    this.form.reset();
  }

}
