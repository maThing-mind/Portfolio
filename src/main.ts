import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { portfolioReducer } from './app/store/portfolio.reducer';
import { PortfolioEffects } from './app/store/portfolio.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ portfolio: portfolioReducer }),
    provideEffects([PortfolioEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
}).catch(err => console.error(err));

