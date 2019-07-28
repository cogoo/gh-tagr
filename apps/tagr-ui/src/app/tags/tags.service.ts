import { Injectable } from '@angular/core';
import { Tag } from './tags.interface';

@Injectable()
export class TagsService {
  constructor() {}

  createTag(tagName: string): Tag {
    return { name: tagName.trim(), color: generateRandomColor() };
  }

  downloadTags(selectedTags: Tag[]) {
    downloadAsJson(selectedTags);
  }
}

function generateRandomColor(): string {
  const letters = '0123456789ABCDEF';
  return Array.from(Array(6)).reduce(acc => {
    return acc + letters[Math.floor(Math.random() * 16)];
  }, '#');
}

function downloadAsJson(selectedTags: Tag[]) {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(selectedTags)
  )}`;
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', 'tags.json');
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
