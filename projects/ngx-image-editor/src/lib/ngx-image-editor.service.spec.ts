import { TestBed } from '@angular/core/testing';

import { NgxImageEditorService } from './ngx-image-editor.service';

describe('NgxImageEditorService', () => {
  let service: NgxImageEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
