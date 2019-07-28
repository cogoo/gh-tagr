import { Tag } from './tags.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TagsState {
  private selectedTags$ = new BehaviorSubject<Tag[]>([]);

  constructor() {}

  addSelectedTag(tag) {
    const currentState = this.selectedTags$.getValue();
    this.selectedTags$.next([...currentState, tag]);
  }

  removeSelectedTag(tag) {
    const currentState = this.selectedTags$.getValue();
    this.selectedTags$.next(
      currentState.filter(selectedTag => tag.name !== selectedTag.name)
    );
  }

  getSelectedTags(byValue: boolean): Tag[];
  getSelectedTags(): Observable<Tag[]>;
  getSelectedTags(byValue?: boolean) {
    return byValue
      ? this.selectedTags$.getValue()
      : this.selectedTags$.asObservable();
  }
}
