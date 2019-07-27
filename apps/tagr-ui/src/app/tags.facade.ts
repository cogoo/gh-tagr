import { TagsState } from './tags.state';
import { TagsApi } from './tags.api';
import { Injectable } from '@angular/core';

@Injectable()
export class TagsFacade {
  selectedTags$ = this.tagsState.getSelectedTags();
  tagTemplates$ = this.tagsApi.getTags();

  constructor(private tagsApi: TagsApi, private tagsState: TagsState) {}

  addTag(tag) {
    this.tagsState.addSelectedTag(tag);
  }
}
