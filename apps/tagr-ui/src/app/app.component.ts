import { Component } from '@angular/core';

@Component({
  selector: 'gh-tagr-root',
  template: `
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
      <img
        width="450"
        src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
      />
    </div>

    <p>
      This is an Angular app built with <a href="https://nx.dev/angular">Nx</a>.
    </p>
    <p>🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**</p>

    <h2>Quick Start & Documentation</h2>

    <ul>
      <li>
        <a href="https://nx.dev/angular/getting-started/what-is-nx"
          >10-minute video showing all Nx features</a
        >
      </li>
      <li>
        <a href="https://nx.dev/angular/tutorial/01-create-application"
          >Interactive tutorial</a
        >
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'tagr-ui';
}
