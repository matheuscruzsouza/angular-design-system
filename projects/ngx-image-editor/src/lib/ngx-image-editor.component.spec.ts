import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageEditorComponent } from './ngx-image-editor.component';

describe('NgxImageEditorComponent', () => {
  let component: NgxImageEditorComponent;
  let fixture: ComponentFixture<NgxImageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
