import { TestBed } from '@angular/core/testing';

import { OfflineCommentService } from './offline-comment.service';

describe('OfflineCommentService', () => {
  let service: OfflineCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
