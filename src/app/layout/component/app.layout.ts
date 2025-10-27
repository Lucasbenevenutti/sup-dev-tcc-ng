import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppNavbar } from "./app.navbar";

@Component({
  selector: 'app-app.layout',
  imports: [RouterModule, AppNavbar],
  template: `
    <app-navbar/>
    <div class="layout-main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
  .layout-main-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 2rem 2rem 0 2rem;
      transition: margin-left var(--layout-section-transition-duration);
  }
  `,
})
export class AppLayout {

}
