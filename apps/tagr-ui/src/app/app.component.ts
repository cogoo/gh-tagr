import { TagsState } from './tags.state';
import { TagsApi } from './tags.api';
import { map, tap, delay } from 'rxjs/operators';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { fromEvent } from 'rxjs';
import { TagsFacade } from './tags.facade';

@Component({
  selector: 'gh-tagr-root',
  styles: [
    `
      :host {
        --ebony-clay: #252a41;
        --action-white: #fff;
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
        flex: 0 0 50%;
        justify-content: center;
      }

      .app-main {
        color: var(--action-white);
      }

      .app-main-wrapper {
        padding: 150px;
      }

      .app-aside {
        background: var(--action-white);
        border-radius: var(--app-radius);
        margin: 40px;
        padding: 30px 50px;
        text-align: left;
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
      }
    `
  ],
  template: `
    <main class="app-wrapper" *ngIf="{ mousemove: mousemove$ | async }">
      <section class="app-main">
        <div class="app-main-wrapper">
          <header class="app-header">
            <h1 class="header-title">Hi Jeff</h1>
            <p class="header-copy">Start creating your Github tags</p>
            <input class="search-bar" placeholder="start typing" />
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
          <ul class="tags">
            <li class="tag" *ngFor="let tag of (selectedTags$ | async)">
              {{ tag.name }}
            </li>
          </ul>
        </section>
        <button class="download"></button>
      </aside>
    </main>
  `
})
class AppComponent {
  title = 'tagr-ui';
  tagTemplates$ = this.tagsFacade.tagTemplates$;
  selectedTags$ = this.tagsFacade.selectedTags$;

  private outerCursor = <any>document.querySelector('.circle-cursor--outer');
  private innerCursor = <any>document.querySelector('.circle-cursor--inner');

  mousemove$ = fromEvent(document, 'mousemove').pipe(
    map((e: any) => ({ x: e.clientX, y: e.clientY })),
    tap(({ x, y }) => {
      requestAnimationFrame(() => {
        this.innerCursor.style = `left:${x}px; top:${y}px`;
        this.outerCursor.style = `left:${x - 14}px; top:${y - 14}px`;
      });
    })
  );

  constructor(private tagsFacade: TagsFacade) {}

  addTag(tag) {
    this.tagsFacade.addTag(tag);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [TagsFacade, TagsApi, TagsState],
  bootstrap: [AppComponent]
})
export class AppModule {}
