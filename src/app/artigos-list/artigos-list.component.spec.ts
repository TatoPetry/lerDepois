import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigosListComponent } from './artigos-list.component';

describe('ArtigosListComponent', () => {
  let component: ArtigosListComponent;
  let fixture: ComponentFixture<ArtigosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
