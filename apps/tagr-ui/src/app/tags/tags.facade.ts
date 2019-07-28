import { Tag } from './tags.interface';
import { TagsService } from './tags.service';
import { TagsState } from './tags.state';
import { TagsApi } from './tags.api';
import { Injectable } from '@angular/core';

@Injectable()
export class TagsFacade {
  selectedTags$ = this.tagsState.getSelectedTags();
  tagTemplates$ = this.tagsApi.getTags();

  constructor(
    private tagsApi: TagsApi,
    private tagsState: TagsState,
    private tagsService: TagsService
  ) {}

  addTag(tag: Tag) {
    this.tagsState.addSelectedTag(tag);
  }

  removeTag(tag: Tag) {
    this.tagsState.removeSelectedTag(tag);
  }

  submitTag(tagName: string) {
    const tag = this.tagsService.createTag(tagName);
    this.tagsState.addSelectedTag(tag);
  }

  downloadTags() {
    this.tagsService.downloadTags(this.tagsState.getSelectedTags(true));
  }
}
