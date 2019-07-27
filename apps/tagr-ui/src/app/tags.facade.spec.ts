import { TestBed } from '@angular/core/testing';

import { TagsFacade } from './tags.facade';

describe('TagsFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsFacade = TestBed.get(TagsFacade);
    expect(service).toBeTruthy();
  });
});
