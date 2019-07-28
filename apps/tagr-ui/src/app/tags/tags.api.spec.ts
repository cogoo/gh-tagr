import { TestBed } from '@angular/core/testing';

import { TagsApi } from './tags.api';

describe('Tags.ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsApi = TestBed.get(TagsApi);
    expect(service).toBeTruthy();
  });
});
