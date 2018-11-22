import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBoxComponent } from './ngx-box.component';

describe('NgxBoxComponent', () => {
  let component: NgxBoxComponent;
  let fixture: ComponentFixture<NgxBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
