import { AppComponent } from './app.component';
import { TagsApi } from './tags.api';
import { TagsFacade } from './tags.facade';
import { TagsState } from './tags.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TagsService } from './tags.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [TagsFacade, TagsApi, TagsState, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
