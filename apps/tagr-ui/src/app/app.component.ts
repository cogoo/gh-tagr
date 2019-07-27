import { Component } from '@angular/core';
import { TagsFacade } from './tags.facade';

@Component({
  selector: 'gh-tagr-root',
  styles: [
    `
      :host {
        --ebony-clay: #252a41;
        --action-white: #fff;
        --turquoise: #35d8d9;
        --app-radius: 20px;
        flex: 0 0 80%;
      }

      .app-wrapper {
        background: var(--ebony-clay);
        border-radius: var(--app-radius);
        display: flex;
        box-shadow: 0px 21px 19px -5px rgba(126, 128, 134, 0.6);
      }

      .app-main,
      .app-aside {
        justify-content: center;
      }

      .app-main {
        color: var(--action-white);
      }

      .app-main-wrapper {
        padding: 150px 75px;
      }

      .app-aside {
        background: var(--action-white);
        border-radius: var(--app-radius);
        padding: 30px 50px;
        text-align: left;
        flex: 1 0 30%;
        margin: 20px;
        position: relative;
      }

      .header-title,
      .header-copy {
        color: var(--action-white);
      }

      .header-title {
        font-size: 4rem;
        margin: 0;
      }

      .header-copy {
        opacity: 0.25;
        margin-top: 5px;
      }

      .section-wrapper {
        margin-top: 40px;
      }

      .section-copy {
        opacity: 0.6;
      }

      .search-bar {
        margin-top: 20px;
        padding: 20px;
        border-radius: var(--app-radius);
        width: 100%;
        border: 0;
        background: rgba(255, 255, 255, 0.2);
        color: var(--action-white);
        font-size: 1.4rem;
      }

      .search-bar::placeholder {
        color: var(--action-white);
      }

      .tiles-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-height: 300px;
        overflow: scroll;
      }

      .tiles {
        padding: 10px;
        border-radius: 6px;
        margin: 5px;
        color: var(--action-white);
      }

      .tiles--inline-block {
        display: inline-block;
      }

      .selected-tag {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
      }

      .trash-icon {
        height: 20px;
      }

      .download-btn {
        bottom: 20px;
        right: 20px;
        position: absolute;
        border-radius: 50%;
        background: var(--turquoise);
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
      }

      .download-btn:hover {
        transform: translateY(-5px);
      }

      .download-icon {
        height: 30px;
      }
    `
  ],
  template: `
    <main class="app-wrapper">
      <section class="app-main">
        <div class="app-main-wrapper">
          <header class="app-header">
            <h1 class="header-title">Hi Jeff</h1>
            <p class="header-copy">Start creating your Github tags</p>
            <input
              #input
              class="search-bar"
              placeholder="start typing"
              (keyup.enter)="onSubmit(input)"
            />
          </header>

          <section
            class="section-wrapper"
            *ngIf="(tagTemplates$ | async) as tags"
          >
            <p class="section-copy">Or chose one of our premade tags:</p>
            <div class="tiles-wrapper">
              <span
                class="tiles"
                *ngFor="let tile of tags"
                [ngStyle]="{ background: tile.color }"
                (click)="addTag(tile)"
              >
                {{ tile.name }}
              </span>
            </div>
          </section>
        </div>
      </section>

      <aside class="app-aside">
        <section class="tags-wrapper">
          <h3 class="tags-title">My Tags</h3>
          <hr />
          <ul>
            <li
              class="selected-tag"
              *ngFor="let tag of (selectedTags$ | async) as selectedTags"
            >
              <span
                class="tiles tiles--inline-block"
                [ngStyle]="{ background: tag.color }"
              >
                {{ tag.name }}
              </span>

              <button class="trash" (click)="removeTag(tag)">
                <img class="trash-icon" src="assets/icons/trash.svg" />
              </button>
            </li>
          </ul>
        </section>
        <button
          class="download-btn"
          *ngIf="(selectedTags$ | async).length > 0"
          (click)="downloadTags()"
        >
          <img class="download-icon" src="assets/icons/download.svg" />
        </button>
      </aside>
    </main>
  `
})
export class AppComponent {
  title = 'tagr-ui';
  tagTemplates$ = this.tagsFacade.tagTemplates$;
  selectedTags$ = this.tagsFacade.selectedTags$;

  constructor(private tagsFacade: TagsFacade) {}

  addTag(tag) {
    this.tagsFacade.addTag(tag);
  }

  removeTag(tag) {
    this.tagsFacade.removeTag(tag);
  }

  onSubmit(input) {
    this.tagsFacade.submitTag(input.value);
    input.value = '';
  }

  downloadTags() {
    this.tagsFacade.downloadTags();
  }
}
