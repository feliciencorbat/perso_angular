import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <h1>Erreur 404: Page non trouvée</h1>
      <a routerLink="/">Retourner à l'accueil</a>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {}
