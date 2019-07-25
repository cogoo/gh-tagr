import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface Tag {
  [key: string]: string;
}

@Injectable()
export class TagService {
  tagTemplates$ = of<Tag[]>([
    { name: 'status:abandoned', color: '#212121' },
    { name: 'status:accepted', color: '#CDDC39' },
    { name: 'status:available', color: '#8BC34A' },
    { name: 'status:blocked', color: '#FF9800' },
    { name: 'status:completed', color: '#4CAF50' },
    { name: 'status:in_progress', color: '#2196F3' },
    { name: 'status:on_hold', color: '#607D8B' },
    { name: 'status:pending', color: '#00BCD4' },
    { name: 'status:review_needed', color: '#FFC107' },
    { name: 'status:revision_needed', color: '#FFEB3B' },
    { name: 'status:needs_more_info', color: '#3F51B5' },
    { name: 'status:duplicate', color: '#673AB7' },
    { name: 'type:bug', color: '#f44336' },
    { name: 'type:enhancement', color: '#009688' },
    { name: 'type:maintenance', color: '#9C27B0' },
    { name: 'type:question', color: '#E91E63' },
    { name: 'priority:critical', color: '#f44336' },
    { name: 'priority:high', color: '#FF9800' },
    { name: 'priority:low', color: '#03A9F4' },
    { name: 'priority:medium', color: '#FFEB3B' }
  ]);
}
