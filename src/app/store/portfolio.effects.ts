import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as PortfolioActions from './portfolio.actions';

@Injectable()
export class PortfolioEffects {
  private actions$ = inject(Actions);

  loadPortfolio$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PortfolioActions.loadPortfolio),
      switchMap(() =>
        of(null).pipe(
          map(() => PortfolioActions.loadPortfolioSuccess({ data: {} })),
          catchError((error) =>
            of(PortfolioActions.loadPortfolioFailure({ error: error.message }))
          )
        )
      )
    );
  });
}

