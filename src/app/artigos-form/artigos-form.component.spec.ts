import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosFormComponent } from './artigos-form.component';

describe('ArtigosFormComponent', () => {
  let component: ArtigosFormComponent;
  let fixture: ComponentFixture<ArtigosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
