import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// TODO: this should be exported from a file
interface Tag {
  [key: string]: string;
}
@Injectable()
export class TagsState {
  private selectedTags$ = new BehaviorSubject<Tag[]>([]);

  constructor() {}

  addSelectedTag(tag) {
    const currentState = this.selectedTags$.getValue();
    this.selectedTags$.next([...currentState, tag]);
  }

  getSelectedTags() {
    return this.selectedTags$.asObservable();
  }
}
