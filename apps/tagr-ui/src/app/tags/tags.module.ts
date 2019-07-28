import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { TagsApi } from './tags.api';
import { TagsFacade } from './tags.facade';
import { TagsState } from './tags.state';
import { TagsService } from './tags.service';

@NgModule({
  declarations: [TagsComponent],
  imports: [CommonModule],
  exports: [TagsComponent],
  providers: [TagsFacade, TagsApi, TagsState, TagsService]
})
export class TagsModule {}
