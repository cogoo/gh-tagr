import { TestBed } from '@angular/core/testing';

import { TagsState } from './tags.state';

describe('TagsState', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsState = TestBed.get(TagsState);
    expect(service).toBeTruthy();
  });
});
