import { TestBed } from '@angular/core/testing';

import { OnlineCommentService } from './online-comment.service';

describe('OnlineCommentService', () => {
  let service: OnlineCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
